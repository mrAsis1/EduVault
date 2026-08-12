#!/usr/bin/env node
// Reads blueprints/<name>/blueprint.json and scaffolds a new project
// directory from it: creates folders, writes files (from inline
// content or a templates/*.tmpl file), and appends any gitignore-
// flagged paths to .gitignore.
//
// This is the only generator in MAW so far — piloted against
// react-vite per the roadmap's pilot-then-replicate pattern. Other
// blueprints do not yet have a blueprint.json; running this against
// them will fail clearly rather than silently producing a partial
// scaffold, until their manifests are added.
//
// Usage:
//   node automation/scripts/generate-project.mjs <blueprint-name> <target-dir>
//
// Example:
//   node automation/scripts/generate-project.mjs react-vite ../my-new-app

import { readFile, writeFile, mkdir, access, appendFile } from "node:fs/promises";
import { join, dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..", "..");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function loadManifest(blueprintName) {
  const manifestPath = join(
    REPO_ROOT,
    "blueprints",
    blueprintName,
    "blueprint.json"
  );

  if (!(await exists(manifestPath))) {
    throw new Error(
      `No blueprint.json found for "${blueprintName}" at ${manifestPath}.\n` +
        `Either this blueprint doesn't exist, or it hasn't been given a ` +
        `machine-readable manifest yet — check blueprints/${blueprintName}/README.md ` +
        `and consider whether it should be added.`
    );
  }

  const raw = await readFile(manifestPath, "utf-8");
  let manifest;
  try {
    manifest = JSON.parse(raw);
  } catch (err) {
    throw new Error(`blueprint.json for "${blueprintName}" is not valid JSON: ${err.message}`);
  }

  for (const field of ["name", "description", "folders", "files"]) {
    if (!(field in manifest)) {
      throw new Error(`blueprint.json for "${blueprintName}" is missing required field "${field}".`);
    }
  }

  return manifest;
}

function serializeContent(content) {
  if (typeof content === "string") return content;
  return JSON.stringify(content, null, 2) + "\n";
}

function resolveWithinTarget(targetDir, relativePath) {
  const outPath = resolve(targetDir, relativePath);
  const targetWithSep = targetDir.endsWith(sep) ? targetDir : targetDir + sep;

  if (outPath !== targetDir && !outPath.startsWith(targetWithSep)) {
    throw new Error(
      `File entry path "${relativePath}" resolves outside the target directory ` +
        `(${outPath}). Refusing to write outside ${targetDir}.`
    );
  }

  return outPath;
}

async function writeFileEntry(blueprintName, targetDir, fileEntry) {
  const outPath = resolveWithinTarget(targetDir, fileEntry.path);
  await mkdir(dirname(outPath), { recursive: true });

  if (fileEntry.template) {
    const templatePath = join(
      REPO_ROOT,
      "blueprints",
      blueprintName,
      "templates",
      fileEntry.template
    );
    if (!(await exists(templatePath))) {
      throw new Error(
        `File entry "${fileEntry.path}" references template "${fileEntry.template}", ` +
          `but ${templatePath} does not exist.`
      );
    }
    const templateContent = await readFile(templatePath, "utf-8");
    await writeFile(outPath, templateContent, "utf-8");
  } else if ("content" in fileEntry) {
    await writeFile(outPath, serializeContent(fileEntry.content), "utf-8");
  } else {
    throw new Error(
      `File entry "${fileEntry.path}" has neither "template" nor "content" — nothing to write.`
    );
  }

  if (fileEntry.gitignore) {
    const gitignorePath = join(targetDir, ".gitignore");
    const line = fileEntry.path.startsWith("/") ? fileEntry.path : `/${fileEntry.path}`;
    const existing = (await exists(gitignorePath))
      ? await readFile(gitignorePath, "utf-8")
      : "";
    if (!existing.split("\n").includes(line)) {
      await appendFile(gitignorePath, `${existing.length && !existing.endsWith("\n") ? "\n" : ""}${line}\n`, "utf-8");
    }
  }

  return outPath;
}

async function generate(blueprintName, targetDirArg) {
  const manifest = await loadManifest(blueprintName);
  const targetDir = resolve(targetDirArg);

  if (await exists(targetDir)) {
    throw new Error(
      `Target directory already exists: ${targetDir}\n` +
        `Refusing to write into an existing directory to avoid overwriting unrelated files.`
    );
  }

  await mkdir(targetDir, { recursive: true });

  for (const folder of manifest.folders) {
    await mkdir(resolveWithinTarget(targetDir, folder), { recursive: true });
  }

  const written = [];
  for (const fileEntry of manifest.files) {
    written.push(await writeFileEntry(blueprintName, targetDir, fileEntry));
  }

  return { manifest, targetDir, folders: manifest.folders, files: written };
}

async function main() {
  const [, , blueprintName, targetDirArg] = process.argv;

  if (!blueprintName || !targetDirArg) {
    console.error("Usage: node automation/scripts/generate-project.mjs <blueprint-name> <target-dir>");
    console.error("Example: node automation/scripts/generate-project.mjs react-vite ../my-new-app");
    process.exit(1);
  }

  try {
    const result = await generate(blueprintName, targetDirArg);
    console.log(`Scaffolded "${result.manifest.name}" at ${result.targetDir}`);
    console.log("");
    console.log("Folders created:");
    for (const f of result.folders) console.log(`  ${f}/`);
    console.log("");
    console.log("Files written:");
    for (const f of result.files) console.log(`  ${f}`);
    console.log("");
    console.log(`Governed by: ${(result.manifest.governedBy ?? []).join(", ") || "(none listed)"}`);
    console.log(`Applies instructions: ${(result.manifest.appliesInstructions ?? []).join(", ") || "(none listed)"}`);
    console.log("");
    console.log("This scaffold is structure only — it does not run npm install");
    console.log("or set up package.json/vite.config.ts. See blueprints/" + blueprintName + "/README.md");
    console.log("for the full stack setup this structure assumes.");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();

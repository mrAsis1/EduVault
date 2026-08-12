#!/usr/bin/env node
// Scans every .md file in the repo for markdown-style links
// [text](path) and verifies relative paths resolve to a real file.
// Skips http(s) links, mailto:, and pure in-page anchors (#foo).

import { readdir, readFile, access } from "node:fs/promises";
import { join, dirname, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

const IGNORED_DIRS = new Set([".git", "node_modules", "automation"]);
const LINK_PATTERN = /\[[^\]]*\]\(([^)]+)\)/g;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function collectMarkdownFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      await collectMarkdownFiles(join(dir, entry.name), files);
    } else if (entry.isFile() && extname(entry.name) === ".md") {
      files.push(join(dir, entry.name));
    }
  }
  return files;
}

function isExternalOrAnchor(target) {
  return (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("#")
  );
}

async function main() {
  const files = await collectMarkdownFiles(ROOT);
  const failures = [];

  for (const file of files) {
    const content = await readFile(file, "utf-8");
    let match;
    while ((match = LINK_PATTERN.exec(content)) !== null) {
      const rawTarget = match[1].split(" ")[0]; // strip optional "title"
      const target = rawTarget.split("#")[0]; // strip in-file anchor
      if (isExternalOrAnchor(rawTarget) || target === "") continue;

      const resolvedPath = resolve(dirname(file), target);
      if (!(await exists(resolvedPath))) {
        failures.push(
          `${file.replace(ROOT + "/", "")} -> "${rawTarget}" (resolved: ${resolvedPath.replace(
            ROOT + "/",
            ""
          )})`
        );
      }
    }
  }

  if (failures.length > 0) {
    console.error(`✗ check-links: ${failures.length} broken link(s) found\n`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log(`✓ check-links: all markdown links resolve (${files.length} files scanned)`);
}

main();

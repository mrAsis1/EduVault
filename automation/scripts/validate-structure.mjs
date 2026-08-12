#!/usr/bin/env node
// Checks that each MAW layer's directories have their required
// companion files, per the conventions established in v0.5–v0.7:
//   - verification/<area>/  needs all 5: README, checklist,
//     review-template, common-mistakes, scorecard (.md)
//   - knowledge/<area>/, research/<area>/, playbooks/, checklists/,
//     runbooks/ need at least README.md

import { readdir, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

const VERIFICATION_REQUIRED = [
  "README.md",
  "checklist.md",
  "review-template.md",
  "common-mistakes.md",
  "scorecard.md",
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function listDirs(path) {
  try {
    const entries = await readdir(path, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } catch {
    return [];
  }
}

async function main() {
  const failures = [];

  // verification/*/ — full 5-file requirement
  const verificationAreas = await listDirs(join(ROOT, "verification"));
  for (const area of verificationAreas) {
    for (const file of VERIFICATION_REQUIRED) {
      const path = join(ROOT, "verification", area, file);
      if (!(await exists(path))) {
        failures.push(`verification/${area}/${file} — missing`);
      }
    }
  }

  // Areas that only require a README.md
  const readmeOnlyRoots = ["knowledge", "research"];
  for (const root of readmeOnlyRoots) {
    const areas = await listDirs(join(ROOT, root));
    for (const area of areas) {
      const path = join(ROOT, root, area, "README.md");
      if (!(await exists(path))) {
        failures.push(`${root}/${area}/README.md — missing`);
      }
    }
  }

  const flatReadmeDirs = ["playbooks", "checklists", "runbooks"];
  for (const dir of flatReadmeDirs) {
    const path = join(ROOT, dir, "README.md");
    if (!(await exists(path))) {
      failures.push(`${dir}/README.md — missing`);
    }
  }

  // agents/<role>/ — each role needs at least a README.md
  const agentRoles = await listDirs(join(ROOT, "agents"));
  for (const role of agentRoles) {
    const path = join(ROOT, "agents", role, "README.md");
    if (!(await exists(path))) {
      failures.push(`agents/${role}/README.md — missing`);
    }
  }

  // v1.0 single-README directories
  const singleReadmeDirs = [
    "memory",
    "project-profiles",
    "metrics",
    "dashboards",
    "telemetry",
  ];
  for (const dir of singleReadmeDirs) {
    const path = join(ROOT, dir, "README.md");
    if (!(await exists(path))) {
      failures.push(`${dir}/README.md — missing`);
    }
  }

  // blueprints/*/ — each needs a README.md
  const blueprintAreas = await listDirs(join(ROOT, "blueprints"));
  for (const area of blueprintAreas) {
    const path = join(ROOT, "blueprints", area, "README.md");
    if (!(await exists(path))) {
      failures.push(`blueprints/${area}/README.md — missing (check this is a real subdirectory, not a stray artifact)`);
    }
  }

  // snippets/*/ — no required filename, but must contain at least one
  // real .md file (catches stray non-content directories, e.g. a
  // shell brace-expansion artifact from a bad mkdir command)
  const snippetAreas = await listDirs(join(ROOT, "snippets"));
  for (const area of snippetAreas) {
    const files = await readdir(join(ROOT, "snippets", area)).catch(() => []);
    const hasMarkdown = files.some((f) => f.endsWith(".md"));
    if (!hasMarkdown) {
      failures.push(`snippets/${area}/ — no .md files found (check this is a real subdirectory, not a stray artifact)`);
    }
  }

  if (failures.length > 0) {
    console.error(`✗ validate-structure: ${failures.length} issue(s) found\n`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log("✓ validate-structure: all required companion files present");
}

main();

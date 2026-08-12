#!/usr/bin/env node
// Checks ROADMAP.md's checklist items ("- [x] `path`" / "- [ ] `path`")
// against what actually exists on disk: flags anything checked [x] but
// missing, and anything unchecked [ ] but already present (a sign the
// roadmap fell behind actual work, as happened before v0.5 was built).

import { readFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const ROADMAP_FILE = join(ROOT, "ROADMAP.md");

// Matches: - [x] `some/path` or - [ ] `some/path`, optional trailing text
const CHECKLIST_PATTERN = /^- \[( |x)\] `([^`]+)`/gm;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const content = await readFile(ROADMAP_FILE, "utf-8");
  const issues = [];
  let match;
  let total = 0;

  while ((match = CHECKLIST_PATTERN.exec(content)) !== null) {
    total++;
    const isChecked = match[1] === "x";
    const relPath = match[2];
    const fullPath = join(ROOT, relPath);
    const onDisk = await exists(fullPath);

    if (isChecked && !onDisk) {
      issues.push(`[x] \`${relPath}\` — marked done but not found on disk`);
    } else if (!isChecked && onDisk) {
      issues.push(`[ ] \`${relPath}\` — exists on disk but not marked done`);
    }
  }

  if (issues.length > 0) {
    console.error(`✗ check-roadmap-sync: ${issues.length} mismatch(es) found\n`);
    for (const i of issues) console.error(`  - ${i}`);
    process.exit(1);
  }

  console.log(`✓ check-roadmap-sync: ${total} checklist items, all match disk state`);
}

main();

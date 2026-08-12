#!/usr/bin/env node
// Verifies ARCHITECTURE_DECISIONS.md's "## ADR-NNNN" headers are
// sequential starting at 0001, with no gaps or duplicates, and appear
// in the file in ascending order. Directly targets the ordering bug
// introduced and manually fixed while drafting ADR-0007.

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const ADR_FILE = join(ROOT, "ARCHITECTURE_DECISIONS.md");

const ADR_HEADER_PATTERN = /^## ADR-(\d{4}):/gm;

async function main() {
  const content = await readFile(ADR_FILE, "utf-8");
  const numbers = [];
  let match;
  while ((match = ADR_HEADER_PATTERN.exec(content)) !== null) {
    numbers.push(Number(match[1]));
  }

  const failures = [];

  if (numbers.length === 0) {
    console.error("✗ check-adr-order: no ADR headers found — check the pattern or file path");
    process.exit(1);
  }

  // Sequential, no gaps, starting at 1
  for (let i = 0; i < numbers.length; i++) {
    const expected = i + 1;
    if (numbers[i] !== expected) {
      failures.push(
        `Position ${i + 1}: expected ADR-${String(expected).padStart(4, "0")}, found ADR-${String(
          numbers[i]
        ).padStart(4, "0")}`
      );
    }
  }

  // Duplicates
  const seen = new Set();
  for (const n of numbers) {
    if (seen.has(n)) {
      failures.push(`ADR-${String(n).padStart(4, "0")} appears more than once`);
    }
    seen.add(n);
  }

  if (failures.length > 0) {
    console.error(`✗ check-adr-order: ${failures.length} issue(s) found\n`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log(`✓ check-adr-order: ${numbers.length} ADRs, sequential, no gaps or duplicates`);
}

main();

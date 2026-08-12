#!/usr/bin/env node
// Scaffolds verification/<name>/ with all 5 required files as
// TODO-marked skeletons, matching the shape of the 10 existing areas.
// Does NOT write real checklist content — per this project's policy
// against fabricated content, a human (or an agent working from the
// real backing instructions/docs file) fills these in.
//
// Usage: node generators/new-verification-area.mjs <area-name>

import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

const areaName = process.argv[2];

if (!areaName) {
  console.error("Usage: node generators/new-verification-area.mjs <area-name>");
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(areaName)) {
  console.error("Area name must be lowercase kebab-case, e.g. 'api-contracts'");
  process.exit(1);
}

const targetDir = join(ROOT, "verification", areaName);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const FILES = {
  "README.md": `# ${titleCase(areaName)} Verification

## Purpose

TODO: what does this area verify, and which \`.github/instructions/\`
or \`docs/\` file does every checklist item here trace back to? Per
ADR-0002, do not add items without a real backing rule.

## Why a separate verification layer

TODO.

## What lives here

- **\`checklist.md\`**
- **\`review-template.md\`**
- **\`common-mistakes.md\`**
- **\`scorecard.md\`**

## Related MAW Documents

- TODO: link the backing instructions/docs file(s)
`,
  "checklist.md": `# ${titleCase(areaName)} Verification Checklist

TODO: every item must trace to a real rule. Do not restate a rule here
— reference it.

## Related MAW Documents

- verification/${areaName}/review-template.md
`,
  "review-template.md": `# ${titleCase(areaName)} Review Template

## Scope

TODO

## Checklist result

Reference: \`verification/${areaName}/checklist.md\`

## Failed items — detail

TODO

## Reviewer

TODO

## Related MAW Documents

- verification/${areaName}/checklist.md
`,
  "common-mistakes.md": `# Common ${titleCase(areaName)} Mistakes

TODO: concrete, specific failure patterns, each traced to a checklist
item.

## Related MAW Documents

- verification/${areaName}/checklist.md
`,
  "scorecard.md": `# ${titleCase(areaName)} Scorecard

## Scoring

TODO: define section scoring per \`verification/security/scorecard.md\`'s
pattern.

## Tracking over time

| Date | PR | Score | Notes |
|------|-----|-------|-------|
|      |     |       |       |

## Related MAW Documents

- verification/${areaName}/checklist.md
`,
};

function titleCase(kebab) {
  return kebab
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

async function main() {
  if (await exists(targetDir)) {
    console.error(`✗ verification/${areaName}/ already exists — not overwriting`);
    process.exit(1);
  }

  await mkdir(targetDir, { recursive: true });
  for (const [filename, content] of Object.entries(FILES)) {
    await writeFile(join(targetDir, filename), content, "utf-8");
  }

  console.log(`✓ Scaffolded verification/${areaName}/ with 5 TODO-marked files.`);
  console.log(`  Fill in real content before this counts as complete —`);
  console.log(`  run "npm run check:structure" to confirm the shape, but`);
  console.log(`  it won't check the TODOs were replaced.`);
}

main();

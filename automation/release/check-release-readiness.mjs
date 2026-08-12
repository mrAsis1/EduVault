#!/usr/bin/env node
// Checks the mechanically-verifiable parts of release readiness:
// CHANGELOG.md has a real entry for the version being released, and
// ROADMAP.md has no unchecked items for that version. Does not tag,
// push, or judge changelog content quality — see release/README.md.
//
// Usage: node release/check-release-readiness.mjs 0.9.0

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

const version = process.argv[2];

if (!version) {
  console.error("Usage: node release/check-release-readiness.mjs <version, e.g. 0.9.0>");
  process.exit(1);
}

async function main() {
  const failures = [];

  const changelog = await readFile(join(ROOT, "CHANGELOG.md"), "utf-8");
  const versionHeader = `## [${version}]`;

  if (!changelog.includes(versionHeader)) {
    failures.push(`CHANGELOG.md has no "${versionHeader}" entry`);
  } else {
    // Confirm it's not left as "No unreleased changes" under that header
    const idx = changelog.indexOf(versionHeader);
    const nextSection = changelog.indexOf("\n## ", idx + 1);
    const section = changelog.slice(idx, nextSection === -1 ? undefined : nextSection);
    if (section.includes("No unreleased changes")) {
      failures.push(`CHANGELOG.md's ${versionHeader} entry is still a placeholder`);
    }
  }

  const roadmap = await readFile(join(ROOT, "ROADMAP.md"), "utf-8");
  const versionShort = version.split(".").slice(0, 2).join("."); // "0.9.0" -> "0.9"
  const sectionPattern = new RegExp(
    `## Version ${versionShort}[^\\n]*\\n([\\s\\S]*?)(?=\\n## Version |$)`
  );
  const sectionMatch = roadmap.match(sectionPattern);

  if (!sectionMatch) {
    failures.push(`ROADMAP.md has no "## Version ${versionShort}" section`);
  } else {
    const unchecked = (sectionMatch[1].match(/^- \[ \]/gm) || []).length;
    if (unchecked > 0) {
      failures.push(
        `ROADMAP.md's Version ${versionShort} section has ${unchecked} unchecked item(s)`
      );
    }
  }

  if (failures.length > 0) {
    console.error(`✗ check-release-readiness: not ready for ${version}\n`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log(`✓ check-release-readiness: ${version} looks ready (changelog + roadmap)`);
  console.log(`  Remember: this doesn't judge changelog accuracy — confirm that by hand`);
  console.log(`  per verification/release/checklist.md before tagging.`);
}

main();

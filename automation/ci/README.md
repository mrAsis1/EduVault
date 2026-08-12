# CI (Automation)

## Purpose

Two distinct workflow templates:

- **`maw-audit.yml`** (meta) — runs `automation/`'s own checks against
  this repo on every PR, per `tools/github-actions/best-practices.md`'s
  "CI enforces what docs describe, mechanically."
- **`downstream-quality-gate.yml`** (downstream template) — a starting
  point for a project *built using* MAW's conventions to wire its own
  test/lint/type-check into PR gating, following the same
  parallel-jobs, fail-fast-on-what-matters structure.

## Related MAW Documents

- `tools/github-actions/best-practices.md`
- `automation/quality/README.md`

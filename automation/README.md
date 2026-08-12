# Automation

## Purpose

Turns the manual processes defined in v0.1–v0.8 into scripts and
generators, so consistency stops depending on someone remembering the
rule — the exact problem that produced a real bug earlier in this
project (an ADR heading briefly overwritten while hand-editing
`ARCHITECTURE_DECISIONS.md`, caught only by manual review). `automation/`
exists so that class of error is caught by a script next time.

## Two audiences

- **Meta-tooling** (`scripts/`, most of `generators/`, `maintenance/`,
  and the `quality/` composite) — validates and maintains MAW *itself*:
  does every `verification/*/` area have all 5 files, do referenced
  paths actually exist, is `ARCHITECTURE_DECISIONS.md` sequentially
  numbered, is `ROADMAP.md` in sync with what's actually on disk.
- **Downstream automation** (`ci/`, `release/`, one `generators/` entry)
  — reusable CI workflow and scaffolding templates for projects *built
  using* MAW's conventions, grounded in `tools/github-actions/` and
  `modules/`. These are templates to copy into a downstream project's
  own `package.json`/`.github/workflows/`, not things that run against
  MAW's own repo.

## Why MAW gets its own minimal `package.json`

MAW itself has no runtime before this version — it's documentation.
The meta-tooling scripts need one to run, so `automation/package.json`
exists as a self-contained, dependency-free (Node built-ins only)
toolkit scoped to `automation/`. It does not imply MAW is a library
downstream projects install; it's the tooling that maintains MAW's own
repo.

## What lives here

- **`scripts/`** — meta-tooling: structure validation, link checking,
  ADR ordering, roadmap/disk sync.
- **`generators/`** — scaffolding: a new `verification/<area>/` (meta)
  and a new component skeleton matching `templates/component.md`
  (downstream).
- **`quality/`** — the composite audit command wiring `scripts/`
  together, and how it maps to `verification/` review gates.
- **`maintenance/`** — when and how often to run the audit; what to do
  with its findings.
- **`ci/`** — downstream GitHub Actions template that runs the
  equivalent checks in a real project's PR pipeline.
- **`release/`** — a script wrapping `workflows/release.md`'s
  mechanical steps (changelog entry check, tag format check).

## Running the meta-tooling

```
cd automation
npm run audit
```

Runs every `scripts/*.mjs` check against the repo root two levels up.

## Related MAW Documents

- `ARCHITECTURE_DECISIONS.md` (ADR-0002 — this layer exists partly to
  enforce that rule mechanically, not just by convention)
- `verification/`
- `workflows/release.md`

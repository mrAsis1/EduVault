# Generators

## Purpose

Scaffolding tools. Each generator creates the *skeleton* for a new
entry — required files with TODO placeholders — not finished content.
This is a legitimate use of generation (unlike fabricating a fake
postmortem or benchmark): an empty, correctly-shaped scaffold is exactly
what MAW's own convention calls for until real content exists (see
`knowledge/README.md`'s content policy).

## What lives here

- **`new-verification-area.mjs`** (meta) — scaffolds a new
  `verification/<name>/` with all 5 required files as TODO-marked
  skeletons, matching the shape used for all ten existing areas.
- **`new-component.md`** (downstream) — the same job
  `templates/component.md` already does, referenced here rather than
  duplicated, per ADR-0002. If a scripted generator for this is wanted
  later, wire it here; today `templates/component.md` filled by hand
  (or by an agent) is sufficient and doesn't need a second script.

## Related MAW Documents

- `automation/README.md`
- `verification/`
- `templates/component.md`

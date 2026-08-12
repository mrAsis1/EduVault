# Maintenance

## Purpose

When and how often to run `automation/`'s checks, and what to do with
their findings — the operational half of `automation/quality/`'s
technical description.

## Cadence

- **Every PR touching structure** (new/renamed folders or files, ADR
  edits, roadmap edits): run `npm run audit` locally before pushing, and
  via `automation/ci/` on the PR.
- **Periodically** (suggested: monthly, or before starting a new
  version's build): run `npm run audit` even with no pending PR — link
  rot and roadmap drift can accumulate from edits made outside this
  tooling (e.g. a file deleted directly on GitHub's web UI).

## What to do with findings

- **`check-links` failures** — fix the link or the missing file; this
  should never be waived, a broken link has no legitimate exception.
- **`check-adr-order` failures** — fix immediately; ADR numbering
  gaps/duplicates make `ARCHITECTURE_DECISIONS.md` actively misleading
  about decision history.
- **`check-roadmap-sync` failures (checked but missing)** — either the
  work was reverted and the roadmap needs unchecking, or the file was
  moved/renamed and the roadmap needs updating.
- **`check-roadmap-sync` failures (unchecked but present)** — usually
  means work landed without updating `ROADMAP.md` in the same PR,
  which `.github/instructions/documentation.instructions.md` requires;
  update the roadmap, don't just leave the mismatch.
- **`validate-structure` failures** — either finish scaffolding the
  area (if genuinely in progress) or don't create the directory until
  ready to complete it in the same PR.

## Related MAW Documents

- `automation/quality/README.md`
- `automation/scripts/`

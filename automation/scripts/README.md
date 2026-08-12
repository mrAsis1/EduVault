# Scripts

## Purpose

Meta-tooling: each script checks one specific consistency rule against
the MAW repo itself. Run individually or together via `npm run audit`
in `automation/`.

## Scripts

- **`validate-structure.mjs`** — every `verification/*/` area has all 5
  required files; every `knowledge/*/`, `research/*/`, `playbooks/`,
  `checklists/`, `runbooks/` area has at least a `README.md`.
- **`check-links.mjs`** — every markdown-style link (`[text](path)`) in
  every `.md` file resolves to a real file, relative to the file it's
  in. Catches the exact class of error this project hit once already:
  a reference to a file that doesn't exist or was moved.
- **`check-adr-order.mjs`** — `ARCHITECTURE_DECISIONS.md`'s `## ADR-NNNN`
  headers are sequential, starting at 0001, no gaps or duplicates.
  Directly targets the ordering bug introduced and manually fixed while
  drafting ADR-0007 — this script exists so that bug is caught by CI
  next time, not by manual re-reading.
- **`check-roadmap-sync.mjs`** — every backtick-quoted path in a
  `ROADMAP.md` checklist item exists on disk if checked `[x]`, and
  flags it if checked but missing, or unchecked `[ ]` but present.

## Exit behavior

Each script exits non-zero on any finding, printing what failed and
why — suitable for wiring into `ci/` or a pre-commit hook.

## Related MAW Documents

- `automation/README.md`
- `automation/quality/README.md`

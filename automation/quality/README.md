# Quality (Automation)

## Purpose

Wires the individual `scripts/` checks into one composite audit, and
states how that audit relates to `verification/`'s human review gates —
automation checks structure and consistency; it does not replace the
judgment calls in `verification/`'s checklists.

## What `npm run audit` checks — and doesn't

**Checks (mechanical, objective):**
- Every `verification/*/` area has its 5 required files (`validate-structure.mjs`)
- Every markdown link resolves (`check-links.mjs`)
- ADRs are sequentially numbered (`check-adr-order.mjs`)
- `ROADMAP.md` matches what's actually on disk (`check-roadmap-sync.mjs`)

**Does not check (requires judgment, stays in `verification/`):**
- Whether a checklist item's *content* is any good
- Whether a `verification/*/review-template.md` was actually filled out
  honestly for a given PR
- Anything `verification/`'s scorecards measure — those require a human
  or agent to assess actual work product, not just file existence

## When to run it

Before any PR that touches structure (new folders, renamed files, ADR
edits) — and as a CI gate, see `automation/ci/`.

## Related MAW Documents

- `automation/scripts/`
- `verification/`

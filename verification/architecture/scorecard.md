# Architecture Scorecard

## Scoring

For each checklist section (Responsibility, Boundaries and dependencies,
Business logic separation, Pattern consistency, Process):

- **2** — all applicable items pass
- **1** — drift identified with a linked follow-up or documented
  exception
- **0** — drift present and unflagged

**Total score** = sum of section scores / (2 × number of applicable
sections), as a percentage.

## Interpretation

- **100%** — no architectural drift found.
- **70–99%** — minor, tracked drift; acceptable to merge.
- **Below 70%** — drift compounding; revisit before adding more code on
  top of the affected module(s).

## Tracking over time

| Date | PR/Module | Score | Notes |
|------|-----------|-------|-------|
|      |           |       |       |

A downward trend across several reviews on the same module is a stronger
signal than any single score — it means the module needs a dedicated
refactor pass, not another patch.

## Related MAW Documents

- `verification/architecture/checklist.md`

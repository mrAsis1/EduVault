# Performance Scorecard

## Scoring

For each checklist section (Measurement discipline, Algorithmic
complexity, Data handling, Responsiveness, Reuse over reimplementation):

- **2** — all applicable items pass
- **1** — gap identified with a linked follow-up
- **0** — gap unflagged, or a trade-off made with no measurement

**Total score** = sum of section scores / (2 × number of applicable
sections), as a percentage.

## Interpretation

- **100%** — no unmeasured trade-offs, no complexity or data-handling
  issues found.
- **70–99%** — minor, tracked issues; acceptable to merge.
- **Below 70%** — do not merge; either an unmeasured readability trade
  was made, or a real scale risk (N+1, unbounded memory load) is present.

## Tracking over time

| Date | PR | Score | Notes |
|------|-----|-------|-------|
|      |     |       |       |

## Related MAW Documents

- `verification/performance/checklist.md`

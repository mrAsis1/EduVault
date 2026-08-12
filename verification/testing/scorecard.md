# Testing Scorecard

## Scoring

For each checklist section (Test structure, Coverage of cases,
Independence and mocking, What's not tested, Pyramid shape, Coverage as
signal):

- **2** — all applicable items pass
- **1** — gap identified with a linked follow-up
- **0** — gap unflagged

**Total score** = sum of section scores / (2 × number of applicable
sections), as a percentage.

## Interpretation

- **100%** — meaningful tests across happy/edge/error paths, correct
  pyramid shape.
- **70–99%** — minor gaps, tracked; acceptable to merge.
- **Below 70%** — do not merge; either core cases are untested or the
  suite is testing the wrong things (internals, snapshots on logic).

## Tracking over time

| Date | PR | Score | Notes |
|------|-----|-------|-------|
|      |     |       |       |

## Related MAW Documents

- `verification/testing/checklist.md`

# Design Scorecard

## Scoring

For each checklist section (Imports, Comments, File and function shape):

- **2** — all applicable items pass
- **1** — minor issues flagged with a follow-up (e.g. "split candidate"
  noted, not blocking)
- **0** — issues left unflagged

**Total score** = sum of section scores / (2 × number of applicable
sections), as a percentage.

## Interpretation

- **100%** — no judgment-call issues found.
- **70–99%** — minor issues flagged, non-blocking; acceptable to merge.
- **Below 70%** — enough readability debt accumulating to warrant a
  dedicated cleanup pass before adding more code to the affected file(s).

This is about trend detection, not gatekeeping — style issues rarely
block a merge on their own, but a downward trend on a file is a signal.

## Tracking over time

| Date | PR/File | Score | Notes |
|------|---------|-------|-------|
|      |         |       |       |

## Related MAW Documents

- `verification/design/checklist.md`

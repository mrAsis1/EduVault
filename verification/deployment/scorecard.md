# Deployment Scorecard

## Scoring

For each checklist section (Automation, Reversibility, Environment
parity, Observability):

- **2** — all applicable items pass
- **1** — gap identified with a documented accepted-risk sign-off
- **0** — gap present with no sign-off

**Total score** = sum of section scores / (2 × number of applicable
sections), as a percentage.

## Interpretation

- **100%** — full automation, rollback, parity, and observability
  confirmed.
- **70–99%** — accepted, signed-off gaps only; deploy can proceed.
- **Below 70%** — do not deploy until rollback and observability gaps
  are closed.

## Tracking over time

| Date | Release | Score | Notes |
|------|---------|-------|-------|
|      |         |       |       |

## Related MAW Documents

- `verification/deployment/checklist.md`

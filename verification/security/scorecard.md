# Security Scorecard

A way to turn a completed `checklist.md` into one comparable number, so
security posture can be tracked across PRs or projects instead of living
only as a pass/fail on a single review.

## Scoring

For each checklist section (Input handling, Data access, Secrets and
credentials, Auth and tokens, Transport, Dependencies, Legacy code):

- **2** — all applicable items pass
- **1** — at least one item fails but has a linked follow-up ticket
- **0** — at least one item fails with no follow-up, or was silently
  skipped

Sections marked entirely N/A are excluded from both numerator and
denominator — don't score a section that doesn't apply.

**Total score** = sum of section scores / (2 × number of applicable
sections), expressed as a percentage.

## Interpretation

- **100%** — every applicable item passed outright.
- **70–99%** — passing with tracked follow-ups; acceptable to merge,
  follow-ups must have owners and dates.
- **Below 70%** — do not merge; too much unresolved or unowned risk.

This threshold is a starting point, not a rule from
`.github/instructions/`; adjust per project if the team agrees, and note
the change here.

## Tracking over time

| Date | PR/Project | Score | Notes |
|------|-----------|-------|-------|
|      |           |       |       |

Append a row per review. If a project's average trends down over several
reviews, that's a signal to revisit `docs/security.md` training/onboarding
for the team, not just individual PRs.

## Related MAW Documents

- `verification/security/checklist.md`
- `verification/security/review-template.md`

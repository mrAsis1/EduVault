# Architecture Review Template

## Scope

What changed, and whether it touches folder structure, module
boundaries, or introduces a new pattern. If it does, link the
`plan-feature.md` output that was approved before implementation.

## Checklist result

Reference: `verification/architecture/checklist.md`

- Passed: [count] / [total applicable]
- Failed items: [list or "none"]

## Failed items — detail

For each Fail:

- **Item:** which checklist line
- **Where:** file/module
- **Why it matters:** concrete consequence (e.g. "this couples the UI
  layer directly to Postgres, breaking if we ever swap databases")
- **Resolution:** fixed in this PR / follow-up ticket linked / accepted
  as a deliberate, documented exception

## Reviewer

Name, date, score from `verification/architecture/scorecard.md` if
tracked.

## Related MAW Documents

- `verification/architecture/checklist.md`
- `docs/architecture.md`

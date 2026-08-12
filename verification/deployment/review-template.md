# Deployment Review Template

## Scope

What's being deployed (version/tag), and to which environment.

## Checklist result

Reference: `verification/deployment/checklist.md`

- Passed: [count] / [total applicable]
- Failed items: [list or "none"]

## Rollback plan

Name the specific mechanism (blue-green, canary, versioned rollback) and
who/what triggers it if needed. Do not proceed if this section is empty.

## Failed items — detail

For each Fail:

- **Item:** which checklist line
- **Risk:** what could go wrong at this deploy specifically
- **Resolution:** fixed before this deploy / accepted risk with reason
  and sign-off

## Reviewer

Name, date, score from `verification/deployment/scorecard.md` if
tracked.

## Related MAW Documents

- `verification/deployment/checklist.md`
- `docs/deployment.md`
- `workflows/release.md`

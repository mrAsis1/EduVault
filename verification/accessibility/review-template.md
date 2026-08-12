# Accessibility Review Template

## Scope

Which components/screens were reviewed. Note whether automated tooling
(axe/Lighthouse) was run and its result.

## Checklist result

Reference: `verification/accessibility/checklist.md`

- Passed: [count] / [total applicable]
- Failed items: [list or "none"]

## Failed items — detail

For each Fail:

- **Item:** which checklist line
- **Where:** component/element
- **How it fails:** e.g. "unreachable by Tab," "no accessible name"
- **Resolution:** fixed in this PR / follow-up ticket linked

## Manual keyboard-only pass

- [ ] Confirmed: full flow completed using only keyboard

## Reviewer

Name, date, score from `verification/accessibility/scorecard.md` if
tracked.

## Related MAW Documents

- `verification/accessibility/checklist.md`
- `.github/instructions/accessibility.instructions.md`

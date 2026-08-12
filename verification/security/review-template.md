# Security Review Template

Copy this into the PR description or a linked review doc. Keep it short —
this is a record of what was checked, not a restatement of the checklist.

---

## Scope

What changed, in one or two sentences. What's explicitly out of scope for
this review (e.g. "auth flow unchanged, not reviewed here").

## Checklist result

Reference: `verification/security/checklist.md`

- Passed: [count] / [total applicable]
- Failed items: [list, or "none"]
- N/A items: [list with one-line reason each]

## Failed items — detail

For each Fail from the checklist:

- **Item:** which checklist line
- **Where:** file/function
- **Risk:** what could go wrong, concretely
- **Resolution:** fixed in this PR / follow-up ticket linked / waived
  (with reason)

## Legacy issues flagged (not fixed here)

Anything pre-existing found in touched code that violates
`.github/instructions/security.instructions.md` but is out of scope to
fix now. Link a follow-up ticket for each.

## Reviewer

Name, date, and score from `verification/security/scorecard.md` if this
project tracks scores.

## Related MAW Documents

- `verification/security/checklist.md`
- `verification/security/scorecard.md`
- `.github/instructions/security.instructions.md`

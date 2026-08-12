---
applyTo: "**/*"
---

When reviewing code, always check:

- Correctness — does it do what it claims, including edge cases
- Clarity — could a new team member follow it without extra context
- Consistency — does it follow this repo's instructions files
- Test coverage — are new behaviors and edge cases tested
- Security — does it violate `security.instructions.md`
- Scope — does the diff match the stated intent, nothing extra bundled in

Always:

- Give specific, actionable feedback tied to a line or block
- Distinguish blocking issues from suggestions explicitly
- Explain *why* something is an issue, not just that it is

Avoid:

- Purely stylistic nitpicks already covered by linting/formatting
- Approving with unresolved blocking comments
- Rewriting the author's code in comments instead of describing the change needed

Every review ends with one of: Approve, Approve with suggestions, or
Request changes — stated explicitly. Review process and PR checklist
live in `workflows/code-review.md`.

# Code Review Workflow

Invoked by `.github/prompts/review.md`. Checklist source of truth:
`.github/instructions/review.instructions.md`.

## 1. Confirm scope

- Read the PR description and confirm the diff matches the stated intent.
- Flag anything bundled in that doesn't belong to the stated change.

## 2. Check correctness

- Does the code do what it claims, including the edge cases identified
  during planning?
- Are error paths handled, not just the happy path?

## 3. Check test coverage

- Are new behaviors tested?
- For bug fixes, is there a regression test per `workflows/bug-fix.md`?
- Do tests exercise behavior, not implementation details, per
  `docs/testing.md`.

## 4. Check consistency

- Does the code follow the applicable `.github/instructions/*.md` files
  for its file type?
- Does it follow existing patterns in the codebase, or silently introduce
  a new one that should have gone through `docs/architecture.md` first?

## 5. Check security

- Run through `.github/instructions/security.instructions.md`.
- Anything that touches input handling, auth, or secrets gets extra
  scrutiny.

## 6. Give feedback

- Specific and line-referenced, not general.
- Explicitly separate blocking issues from suggestions.
- Explain why something is an issue, not just flag it.
- Skip pure style/formatting nitpicks — that's the linter's job, per
  `docs/style-guide.md`.

## 7. Verdict

State one of, explicitly:

- **Approve** — no issues.
- **Approve with suggestions** — non-blocking improvements noted.
- **Request changes** — blocking issues listed, must be resolved before
  merge.

## 8. Resolve and merge

- Author addresses blocking issues.
- Re-review only the changed portions unless the fix was substantial.
- Merge per `docs/git-workflow.md` once approved and CI is green.

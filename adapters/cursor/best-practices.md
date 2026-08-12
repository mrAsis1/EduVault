# Cursor: Best Practices

## Re-add `system-prompt.md`'s content after major MAW updates

.cursorrules is a static snapshot — it doesn't auto-sync with changes to
`AGENTS.md` or `.github/instructions/`. Refresh it after structural
MAW changes, per
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s versioning
discipline applied to this adapter.

## Point Cursor at the specific `.github/prompts/*.md` file for the task

Rather than a vague instruction, invoking the matching prompt file by
name gets more consistent output — same reasoning as
[`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md)
existing as a separate file rather than folded into one generic blob.

## Verify Cursor actually applies scoped instructions the way Copilot does

Not every tool auto-scopes `.github/instructions/*.instructions.md` by
file type the way GitHub Copilot does natively — confirm Cursor's
actual behavior before assuming parity, per
[`limitations.md`](limitations.md).

## Related

- [`system-prompt.md`](system-prompt.md)
- [`docs/git-workflow.md`](../../docs/git-workflow.md)

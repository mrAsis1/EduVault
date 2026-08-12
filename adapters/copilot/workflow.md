# Copilot: Workflow

## 1. Setup (once per project)

Nothing beyond having
[`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)
committed at the repo root — Copilot picks it up automatically, unlike
adapters requiring a manual paste step (contrast
[`adapters/claude/workflow.md`](../claude/workflow.md)).

## 2. Per-task invocation

- `.github/instructions/*.instructions.md` auto-scope by file type —
  no manual invocation needed.
- For task-level workflows, reference the relevant
  `.github/prompts/*.md` file directly in Copilot Chat, same pattern
  as [`adapters/claude/example-prompts.md`](../claude/example-prompts.md).

## 3. Review

Unchanged — [`workflows/code-review.md`](../../workflows/code-review.md)
applies regardless of which agent wrote the diff.

## Related

- [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)
- [`workflows/code-review.md`](../../workflows/code-review.md)

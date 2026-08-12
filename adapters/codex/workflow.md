# Codex: Workflow

How a MAW-based session with Codex runs end to end. Mechanics
only — the actual process is
[`workflows/feature-development.md`](../../workflows/feature-development.md)
and its siblings, unchanged.

## 1. Setup (once per project)

- Nothing to add — confirm `AGENTS.md` exists at the repo root, per
  [`system-prompt.md`](system-prompt.md); Codex discovers it
  automatically.
- Confirm Codex can also read `.github/instructions/` and `workflows/`
  from the repo for the deeper rules `AGENTS.md` routes to.

## 2. Per-task invocation

- Reference the specific `.github/prompts/*.md` file for the task,
  per [`example-prompts.md`](example-prompts.md).
- Let Codex follow the linked `workflows/*.md` process — plan,
  wait for approval, implement, verify, document.

## 3. Review

Human review still happens per
[`workflows/code-review.md`](../../workflows/code-review.md), per
[`limitations.md`](limitations.md).

## Related

- [`system-prompt.md`](system-prompt.md)
- [`workflows/feature-development.md`](../../workflows/feature-development.md)

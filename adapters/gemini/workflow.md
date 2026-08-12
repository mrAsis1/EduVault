# Gemini: Workflow

How a MAW-based session with Gemini runs end to end. Mechanics
only — the actual process is
[`workflows/feature-development.md`](../../workflows/feature-development.md)
and its siblings, unchanged.

## 1. Setup (once per project)

- Add [`system-prompt.md`](system-prompt.md)'s content to GEMINI.md.
- Confirm Gemini can read `AGENTS.md`, `.github/instructions/`,
  and `workflows/` from the repo.

## 2. Per-task invocation

- Reference the specific `.github/prompts/*.md` file for the task,
  per [`example-prompts.md`](example-prompts.md).
- Let Gemini follow the linked `workflows/*.md` process — plan,
  wait for approval, implement, verify, document.

## 3. Review

Human review still happens per
[`workflows/code-review.md`](../../workflows/code-review.md), per
[`limitations.md`](limitations.md).

## Related

- [`system-prompt.md`](system-prompt.md)
- [`workflows/feature-development.md`](../../workflows/feature-development.md)

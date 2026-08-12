# Claude: Workflow

How a MAW-based session with Claude runs end to end. This is the
Claude-specific mechanics; the actual engineering process is
[`workflows/feature-development.md`](../../workflows/feature-development.md)
and its siblings, unchanged.

## 1. Setup (once per project)

- Paste [`system-prompt.md`](system-prompt.md)'s content into
  `CLAUDE.md` (Claude Code) or the Project's Instructions field
  (claude.ai).
- Confirm Claude can read `AGENTS.md`, `.github/instructions/`, and
  `workflows/` — either because they're in the repo Claude Code has
  access to, or uploaded to the Project's knowledge.

## 2. Per-task invocation

- Reference the specific `.github/prompts/*.md` file for the task, per
  [`example-prompts.md`](example-prompts.md).
- Let Claude follow the linked `workflows/*.md` process — plan, wait
  for approval, implement, verify, document, per
  [`workflows/feature-development.md`](../../workflows/feature-development.md)'s
  phase gates.

## 3. Review

- Human review still happens per
  [`workflows/code-review.md`](../../workflows/code-review.md) —
  Claude following the process correctly is not a substitute for this
  step, per [`limitations.md`](limitations.md).

## 4. Session end

- If using claude.ai Projects, confirm anything genuinely worth
  persisting (a decision, a convention correction) has been written
  into the actual repo files, not left only in chat history — per
  [`best-practices.md`](best-practices.md).

## Related

- [`system-prompt.md`](system-prompt.md)
- [`workflows/feature-development.md`](../../workflows/feature-development.md)

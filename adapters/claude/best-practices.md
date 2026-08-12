# Claude: Best Practices

## Re-paste `system-prompt.md`'s content after major MAW updates

Claude's Project Instructions and `CLAUDE.md` are static snapshots —
they don't auto-sync with changes to `AGENTS.md` or
`.github/instructions/`. After a structural change to MAW itself
(a new instructions file, a renamed workflow), refresh the pasted
content per [`docs/git-workflow.md`](../../docs/git-workflow.md)'s
versioning discipline applied to this adapter specifically.

## Use Projects (or repo-local `CLAUDE.md`) to scope context, not conversation history alone

Claude's memory of past conversations is not a substitute for MAW's
own documentation layer — it's a convenience, not a source of truth.
Anything Claude needs to reliably know on every session (the rules
themselves) belongs in the pasted system prompt and the repo's actual
files, not left to accumulate implicitly in chat history, per
[`principles/documentation.md`](../../principles/documentation.md)'s
"write for the next person" applied to future sessions with the same
tool.

## Point Claude at the specific `.github/prompts/*.md` file for the task

Rather than a vague "help me build X," invoking the matching prompt
file by name (or pasting its content) gets more consistent output —
this is the same reasoning as
[`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md)
and its siblings existing as separate files rather than one giant
instructions blob: task-scoped invocation beats generic instruction.

## Related

- [`system-prompt.md`](system-prompt.md)
- [`docs/git-workflow.md`](../../docs/git-workflow.md)

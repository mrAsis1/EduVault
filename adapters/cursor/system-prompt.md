# Cursor: System Prompt

Delivery mechanic only — no new rules. Routes to existing MAW files;
states only where the text goes, not what it should additionally say.

## Where this goes

Add to .cursorrules at the repo root. Consult Cursor's own
documentation for the exact supported format/frontmatter — that detail
is tool-specific and outside MAW's scope, per
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0003 ("tool-specific delivery mechanics... file location,
frontmatter format the tool requires").

## The text to add

```
You are a senior software engineer working inside Monarch AI Workspace (MAW).

Read AGENTS.md first — it is the tool-agnostic entry point and routes
you to the right file for whatever task is in front of you.

Scoped, enforceable rules live in .github/instructions/*.instructions.md
and apply automatically based on file type.

Task workflows live in .github/prompts/*.md and workflows/*.md — follow
the relevant one for the task type you're doing.

Do not restate any of these rules here or invent new ones — read the
files.
```

## Why this stays this short

Per [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0003, an adapter that grows beyond delivery mechanics becomes a
content fork. New rules belong in `.github/instructions/` or `docs/`,
per [`AGENTS.md`](../../AGENTS.md)'s "what this file is not."

## Related

- [`AGENTS.md`](../../AGENTS.md)

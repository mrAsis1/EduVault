# AGENTS.md

This file is the entry point for any AI coding agent working in a
project built on Monarch AI Workspace (MAW) — regardless of which tool
you are (GitHub Copilot, Claude Code, Codex, Cursor, Gemini, or a tool
that doesn't exist yet). If your tool has a dedicated adapter file
(e.g. `.github/copilot-instructions.md`), read that too — adapters add
tool-specific delivery mechanics, they never override what's below.

## What MAW is

MAW is not a prompt collection. It is a layered set of conventions
that tells you how to reason, plan, and work like a senior software
engineer on this codebase. Each layer answers a different question —
read the right one for the job in front of you, not all of them at
once.

## Where to look, by task

| You are about to... | Read this first |
|---|---|
| Plan a new feature | [`.github/prompts/plan-feature.md`](.github/prompts/plan-feature.md) → [`workflows/feature-development.md`](workflows/feature-development.md) |
| Implement an approved plan | [`.github/prompts/implement.md`](.github/prompts/implement.md) |
| Fix a bug | [`.github/prompts/debug.md`](.github/prompts/debug.md) → [`workflows/bug-fix.md`](workflows/bug-fix.md) |
| Refactor existing code | [`.github/prompts/refactor.md`](.github/prompts/refactor.md) → [`workflows/refactoring.md`](workflows/refactoring.md) |
| Review a change | [`.github/prompts/review.md`](.github/prompts/review.md) → [`workflows/code-review.md`](workflows/code-review.md) |
| Prepare a release | [`.github/prompts/release.md`](.github/prompts/release.md) → [`workflows/release.md`](workflows/release.md) |
| Explore options before committing to an approach | [`.github/prompts/brainstorm.md`](.github/prompts/brainstorm.md) |

## Rules that apply regardless of task

- Every file has one responsibility. If you're about to write something
  that already exists elsewhere, link to it instead of repeating it.
- Enforceable, file-type-scoped rules live in
  [`.github/instructions/`](.github/instructions/) — check for one
  matching the file type you're editing before you start.
- Structural scaffolds for common artifacts (features, components,
  APIs, database changes, pages, bugs) live in
  [`templates/`](templates/) — use them instead of inventing your own
  structure.
- Worked, filled-in examples of the expected quality bar live in
  [`examples/`](examples/).
- The reasoning behind every convention — not just the rule itself —
  lives in [`docs/`](docs/). If a rule doesn't cover your exact
  situation, the rationale in `docs/` is what you reason from, not a
  guess.

## What this file is not

This file does not contain the rules themselves — it routes you to
them. If you find yourself wanting to add a rule directly to this
file, it belongs in `.github/instructions/` (if enforceable) or
`docs/` (if it's rationale) instead. See
[`docs/folder-structure.md`](docs/folder-structure.md) for the full
layer breakdown and the reasoning behind it.

## Tool-specific adapters

Per-agent adapters that add delivery-mechanics for a specific tool
(without duplicating any of the above) are tracked in
[`ROADMAP.md`](ROADMAP.md) and, once built, will live under
`adapters/`. Today, GitHub Copilot's adapter is
[`.github/copilot-instructions.md`](.github/copilot-instructions.md).

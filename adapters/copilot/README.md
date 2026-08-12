# Adapter: GitHub Copilot

GitHub Copilot already has a native adapter file at
[`.github/copilot-instructions.md`](../../.github/copilot-instructions.md) —
Copilot reads it automatically, with no separate delivery step needed.
This entry is intentionally thin: it points to that file rather than
duplicating it, per
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s ADR-0002.

## In this adapter

| File | Covers |
|---|---|
| [`system-prompt.md`](system-prompt.md) | Where Copilot's instructions actually live, and why there's nothing to paste here |
| [`workflow.md`](workflow.md) | How a MAW-based session with Copilot runs |

No `best-practices.md`, `limitations.md`, or `example-prompts.md` —
Copilot's behavior around `.github/instructions/*.instructions.md`
auto-scoping is native and well-documented by GitHub itself, and
doesn't need MAW-specific elaboration the way a general-purpose chat
tool does. Same content-driven file-count reasoning as
`tools/figma/` staying lighter than `tools/github-actions/`.

## Relationship to other layers

- [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)
- [`AGENTS.md`](../../AGENTS.md)

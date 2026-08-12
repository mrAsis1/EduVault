# Adapter: Claude

Thin, tool-specific delivery mechanics for using MAW with Claude (Claude
Code, Claude in claude.ai Projects, or the API), per
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0003: this adapter routes back to `docs/`,
`.github/instructions/`, and `workflows/` — it does not restate them.

## In this adapter

| File | Covers |
|---|---|
| [`system-prompt.md`](system-prompt.md) | The actual system-prompt / project-instructions text to paste into Claude |
| [`best-practices.md`](best-practices.md) | Claude-specific usage patterns (memory, projects, tool use) |
| [`limitations.md`](limitations.md) | Where Claude's behavior diverges from what a MAW workflow assumes |
| [`example-prompts.md`](example-prompts.md) | Worked prompts invoking MAW workflows through Claude specifically |
| [`workflow.md`](workflow.md) | How a MAW-based session with Claude actually runs, end to end |

## Relationship to other layers

- [`AGENTS.md`](../../AGENTS.md) — the tool-agnostic entry point this
  adapter delivers on top of
- [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md) —
  the sibling adapter for GitHub Copilot; same content, different
  delivery mechanism
- [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md) —
  ADR-0003, the thin-adapter rule this file set follows

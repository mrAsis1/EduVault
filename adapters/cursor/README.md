# Adapter: Cursor

Thin, tool-specific delivery mechanics for using MAW with Cursor,
per [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0003: this adapter routes back to `docs/`,
`.github/instructions/`, and `workflows/` — it does not restate them.

## In this adapter

| File | Covers |
|---|---|
| [`system-prompt.md`](system-prompt.md) | The text to add to .cursorrules |
| [`best-practices.md`](best-practices.md) | Cursor-specific usage patterns |
| [`limitations.md`](limitations.md) | Where Cursor's behavior diverges from what a MAW workflow assumes |
| [`example-prompts.md`](example-prompts.md) | Worked prompts invoking MAW workflows through Cursor |
| [`workflow.md`](workflow.md) | How a MAW-based session with Cursor runs, end to end |

## Relationship to other layers

- [`AGENTS.md`](../../AGENTS.md) — the tool-agnostic entry point this adapter delivers on top of
- [`adapters/claude/`](../claude/README.md) — sibling adapter, same structure
- [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md) — ADR-0003

# Adapter: Codex

Codex CLI reads [`AGENTS.md`](../../AGENTS.md) at the repo root
directly — no separate config file needed. This adapter is thinner
than `cursor`/`gemini`/`windsurf` as a result: there's no new file to
create, only Codex-specific discovery/usage notes, per
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0003.

## In this adapter

| File | Covers |
|---|---|
| [`system-prompt.md`](system-prompt.md) | Confirms AGENTS.md is read directly — nothing to add elsewhere |
| [`best-practices.md`](best-practices.md) | Codex-specific usage patterns (discovery order, byte limits) |
| [`limitations.md`](limitations.md) | Where Codex's behavior diverges from what a MAW workflow assumes |
| [`example-prompts.md`](example-prompts.md) | Worked prompts invoking MAW workflows through Codex |
| [`workflow.md`](workflow.md) | How a MAW-based session with Codex runs, end to end |

## Relationship to other layers

- [`AGENTS.md`](../../AGENTS.md) — the tool-agnostic entry point this adapter delivers on top of
- [`adapters/claude/`](../claude/README.md) — sibling adapter, same structure
- [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md) — ADR-0003

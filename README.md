# Monarch AI Workspace (MAW)

Monarch AI Workspace is an AI engineering platform, not a prompt
collection. It teaches GitHub Copilot, Claude Code, Codex, Cursor,
Gemini, and future AI coding assistants how to reason, plan, and work
like senior software engineers — across any project that adopts it.

## Philosophy

Think before coding.
Research before planning.
Plan before implementing.
Verify before completing.
Document before releasing.

## How MAW is organized

MAW separates *why*, *what*, *how*, and *judgment* into distinct layers.
Each layer has one job. None of them repeat what another already says —
if you're reading a sentence twice across two files, that's a bug, not
a feature. See [`docs/folder-structure.md`](docs/folder-structure.md)
for the full layer breakdown.

| Layer | Answers | Start here |
|---|---|---|
| `docs/` | Why a convention exists | [`docs/folder-structure.md`](docs/folder-structure.md) |
| `.github/instructions/` | What is mechanically enforced, scoped by file type | [`.github/instructions/`](.github/instructions/) |
| `.github/prompts/` | How to invoke an AI task without re-deriving process | [`.github/prompts/`](.github/prompts/) |
| `workflows/` | The ordered, step-by-step process for a task | [`workflows/`](workflows/) |
| `templates/` | Reusable, fillable scaffolds | [`templates/`](templates/) |
| `examples/` | What "good" looks like, filled in | [`examples/`](examples/) |

Two additional layers are in active development — see
[`ROADMAP.md`](ROADMAP.md):

- `core/` — non-enforceable reasoning support (principles, heuristics,
  decision trees) for judgment calls no flat rule can cover
- `adapters/` — per-agent entry points (Claude, Cursor, Codex, Gemini,
  Copilot) that all resolve back to the same `docs/`, `instructions/`,
  and `workflows/` — never a forked copy of them

## Quick Start

1. Copy the layers you need into your project — at minimum,
   `.github/` for Copilot-compatible tooling.
2. Read [`AGENTS.md`](AGENTS.md) if you're an AI agent, or
   [`docs/folder-structure.md`](docs/folder-structure.md) if you're a
   human contributor — both explain where to look for what.
3. For a new feature, start at
   [`.github/prompts/plan-feature.md`](.github/prompts/plan-feature.md).
   For a bug, start at
   [`.github/prompts/debug.md`](.github/prompts/debug.md).

## Contributing

MAW does not yet have a formal contribution process — this is tracked
in [`ROADMAP.md`](ROADMAP.md) under governance. Until then, changes
should follow the same rule every layer in this repo already follows:
one responsibility per file, no duplication, link instead of repeating.

## Project status and direction

- Current state and history: [`CHANGELOG.md`](CHANGELOG.md)
- Where MAW is going: [`ROADMAP.md`](ROADMAP.md)
- Why MAW is shaped the way it is: [`ARCHITECTURE_DECISIONS.md`](ARCHITECTURE_DECISIONS.md)

## License

[MIT](LICENSE)

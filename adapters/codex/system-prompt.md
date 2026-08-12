# Codex: System Prompt

## Where this goes

Nowhere new. Codex CLI discovers and reads
[`AGENTS.md`](../../AGENTS.md) at the repository root directly, building
it into the first turn of every session — the same file
[`AGENTS.md`](../../AGENTS.md) already documents as MAW's tool-agnostic
entry point for every agent. There's no Codex-specific file to create
or content to paste elsewhere.

## Discovery detail worth knowing

Codex builds its instruction chain from a global `~/.codex/AGENTS.md`
(if present) plus every `AGENTS.md` from the project root down to the
current working directory, concatenated in that order, capped at a
configurable byte limit (32 KiB by default). MAW's root `AGENTS.md`
participates in that chain automatically — nothing extra required for
a single-root repo like this one.

## Why this file doesn't duplicate AGENTS.md's content

Per [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002, this file only documents *that* Codex reads the existing
file and *how* discovery works — it does not restate what
`AGENTS.md` says.

## Related

- [`AGENTS.md`](../../AGENTS.md)
- [`best-practices.md`](best-practices.md)

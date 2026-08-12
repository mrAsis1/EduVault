# Codex: Best Practices

## No separate file to keep in sync

Because Codex reads MAW's root [`AGENTS.md`](../../AGENTS.md) directly
(confirmed — see [`system-prompt.md`](system-prompt.md)), there's no
Codex-specific snapshot that can drift the way
`adapters/cursor/.cursorrules` or `adapters/gemini/GEMINI.md` can.
Updating `AGENTS.md` updates what Codex sees automatically, next
session.

## Mind the byte cap on large repos

Codex's `project_doc_max_bytes` (32 KiB by default) truncates the
combined instruction chain if exceeded. MAW's root `AGENTS.md` is a
routing file, not the rules themselves, so it should stay well under
this — if it starts growing, that's a signal content has leaked in
that belongs in `.github/instructions/` or `docs/` instead, per
`AGENTS.md`'s own "what this file is not" section.

## Point Codex at the specific `.github/prompts/*.md` file for the task

Rather than a vague instruction, invoking the matching prompt file by
name gets more consistent output — same reasoning as
[`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md)
existing as a separate file rather than folded into one generic blob.

## Verify Codex actually applies scoped instructions the way Copilot does

Not every tool auto-scopes `.github/instructions/*.instructions.md` by
file type the way GitHub Copilot does natively — confirm Codex's
actual behavior before assuming parity, per
[`limitations.md`](limitations.md).

## Related

- [`system-prompt.md`](system-prompt.md)
- [`AGENTS.md`](../../AGENTS.md)

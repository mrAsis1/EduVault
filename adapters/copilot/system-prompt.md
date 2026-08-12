# Copilot: System Prompt

## Where this goes

Nowhere new — it already exists at
[`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)
at the repo root. GitHub Copilot discovers and applies this file
automatically; there's no separate paste step like Claude's Project
Instructions or a system-prompt API parameter.

## Why this file doesn't repeat that content

Per [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002, copying `.github/copilot-instructions.md`'s text here would
create two copies that can drift. If Copilot's instructions need to
change, edit that file directly.

## Related

- [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)

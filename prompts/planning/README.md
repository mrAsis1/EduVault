# Prompts: Planning

Reusable prompt library entry for the planning phase, tool-agnostic —
unlike `adapters/*/example-prompts.md`, which shows tool-specific
invocation, this is the actual reusable prompt content itself, usable
by any adapter.

## In this entry

| File | Covers |
|---|---|
| [`prompt.md`](prompt.md) | The reusable planning prompt text |
| [`variants.md`](variants.md) | Scoped variants (small fix vs. full feature vs. architectural change) |

## Relationship to other layers

- [`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md) —
  the canonical planning entry point this library supports; this
  directory doesn't replace it, it's the reusable prompt text an
  adapter or a person can paste directly, per
  [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
  no-duplication rule (link, don't restate the process itself)
- [`workflows/feature-development.md`](../../workflows/feature-development.md)
- [`templates/feature.md`](../../templates/feature.md)

# React: Project Structure

General folder-structure reasoning lives in
[`docs/folder-structure.md`](../../docs/folder-structure.md) (for MAW
itself) and [`patterns/feature-folder.md`](../../patterns/feature-folder.md)
(for applications built using MAW conventions). This file gives the
concrete React-specific layout that pattern implies.

## Baseline layout

```
src/
  features/
    <feature-name>/
      components/       — components used only within this feature
      hooks/             — hooks used only within this feature
      api/                — data-fetching functions for this feature
      types.ts            — types owned by this feature
      index.ts             — the feature's public surface
  components/            — shared, cross-feature components only
  hooks/                 — shared, cross-feature hooks only
  lib/                    — framework-agnostic utilities, no React imports
  App.tsx
  main.tsx
```

## Why feature-first, not type-first

A `components/`, `hooks/`, `services/` split at the top level scatters
everything about one feature across three directories. Feature folders
keep what changes together, together — this is
[`patterns/feature-folder.md`](../../patterns/feature-folder.md) applied
directly. Only promote something to the shared top-level `components/`
or `hooks/` once a second, unrelated feature genuinely needs it — see
[`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md).

## A feature's `index.ts` is its contract

Only export what other features are meant to import. Everything else
in the feature folder is an implementation detail. This keeps feature
boundaries real rather than nominal — a feature that reaches into
another feature's `components/` directly has broken the boundary, per
[`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)'s
"no reaching across layers" rule.

## `lib/` has no React imports

Anything in `lib/` should be plain TypeScript, testable without
rendering anything. If a "utility" needs `useState` or JSX, it belongs
in `hooks/` or `components/`, not `lib/`.

## Related

- [`patterns/feature-folder.md`](../../patterns/feature-folder.md)
- [`docs/folder-structure.md`](../../docs/folder-structure.md)
- [`docs/coding-standards.md`](../../docs/coding-standards.md) (naming: `PascalCase` components, `kebab-case` folders)

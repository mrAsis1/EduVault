# TypeScript: Project Structure

## Where types live

- **Types used only within one module/feature** → colocated, e.g.
  `features/orders/types.ts`, per [`patterns/feature-folder.md`](../../patterns/feature-folder.md).
- **Types shared across features** → a top-level `types/` only once a
  second real consumer exists, per
  [`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md).
- **Types generated from external schemas** (API specs, database
  schema) → a dedicated `generated/` directory, gitignored or
  regenerated in CI, never hand-edited.

## `tsconfig.json` as a structural document

Path aliases (`@/features/*`) belong in `tsconfig.json` and should
mirror the actual folder structure — per
[`docs/style-guide.md`](../../docs/style-guide.md)'s "avoid deep
relative paths." A path alias that doesn't match the real folder layout
becomes actively misleading.

## Related

- [`docs/folder-structure.md`](../../docs/folder-structure.md)
- [`docs/style-guide.md`](../../docs/style-guide.md)

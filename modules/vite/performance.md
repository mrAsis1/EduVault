# Vite: Performance

General rules: [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md).

## Dev-server speed comes from native ESM — don't defeat it

Barrel files (`index.ts` that re-exports an entire folder) can force
Vite to resolve far more modules than the page actually needs during
dev, slowing HMR. Prefer direct imports for large modules; keep barrel
files small.

## Lazy-load route-level code

Route-based code-splitting (via dynamic `import()`) keeps the initial
bundle small — this is Vite/Rollup's version of
`performance.instructions.md`'s "lazy loading for non-critical code
paths."

## Analyze the bundle before optimizing

Use `rollup-plugin-visualizer` or similar to see what's actually large
before changing config — per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md),
don't guess.

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)

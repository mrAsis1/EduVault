# React: Performance

General performance rules (measure before optimizing, no speculative
optimization, debounce high-frequency handlers) live in
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
and [`principles/performance-first.md`](../../principles/performance-first.md).
This file is what those rules look like specifically in React.

## Measure first, with the right tool

Use React DevTools' Profiler tab to find which components actually
re-render and how long they take, before reaching for `memo` or
`useMemo` anywhere. Per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md),
optimizing a component that isn't in the profiled hot path is wasted
complexity.

## `React.memo`, `useMemo`, `useCallback` — only when justified

These prevent a re-render or a recomputation, but each has a real cost
(the memoization check itself, plus code complexity). They're justified
when:

- A component is provably expensive to render (measured, not assumed)
  **and** re-renders often with the same props.
- A computed value is expensive **and** its inputs rarely change.
- A callback is passed to a memoized child, where a new reference each
  render would defeat that memoization.

They're not justified as a default habit on every component — see
[`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md) for
the general version of this trade-off.

## List rendering at scale

For lists beyond roughly a few hundred rendered items, render only the
visible slice (virtualization) rather than the full list, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"paginate or stream large datasets."

## Code-splitting with `lazy`/`Suspense`

Route-level or heavy, rarely-used components (a rich text editor, a
charting library) are good candidates for `React.lazy` so their code
isn't in the initial bundle. This is the React-specific form of
"prefer lazy loading for non-critical code paths" from
`performance.instructions.md`.

## Avoid new object/array/function literals in render when they defeat memoization

```tsx
// Creates a new object every render — defeats memo on Child
<Child style={{ margin: 8 }} />

// Stable reference
const childStyle = { margin: 8 }; // outside the component, or useMemo if it depends on props
<Child style={childStyle} />
```

Only worth fixing when `Child` is actually memoized and this is
measured to matter — not a blanket rule for every literal.

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
- [`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)
- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)

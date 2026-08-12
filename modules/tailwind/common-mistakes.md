# Tailwind: Common Mistakes

## Dynamically constructed class names

```tsx
// Wrong: Tailwind's build-time scanner can't see this string, class is never generated
const className = `text-${color}-500`;

// Right: use a complete, statically-analyzable class per branch
const className = color === "red" ? "text-red-500" : "text-blue-500";
```

Tailwind scans source for literal class strings at build time — a
programmatically concatenated class name won't be found and won't be
included in the final CSS.

## Reaching for `@apply` to avoid "long" class lists

Long utility strings feel noisy, but wrapping them in `@apply` inside a
custom CSS class reintroduces the indirection (which classes are
applied? where?) that utility-first styling is meant to remove. Extract
a component instead — see [`best-practices.md`](best-practices.md).

## Missing `content` glob entries

See [`project-structure.md`](project-structure.md) — a common source of
"styles not applying" confusion.

## Related

- [`best-practices.md`](best-practices.md)

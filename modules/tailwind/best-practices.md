# Tailwind: Best Practices

## Extract a component, not a CSS class, for reused utility groups

```tsx
// Repeated utility string across many buttons — extract the component, not a @apply class
function PrimaryButton(props: ButtonProps) {
  return <button className="px-4 py-2 bg-brand-600 text-white rounded-md" {...props} />;
}
```

This follows [`heuristics/when-to-create-component.md`](../../heuristics/when-to-create-component.md)'s
"extract when the same UI appears in multiple places" — the repeated
thing is a UI pattern, and a component captures that better than a
`@apply`-based CSS class, which reintroduces a parallel styling system
Tailwind is meant to replace.

## Use the config's theme scale, not arbitrary values, by default

`p-4` over `p-[17px]` — arbitrary values are an escape hatch for a
genuine one-off need, not a substitute for the design system. Frequent
arbitrary values are a signal the theme scale is missing something
real, per [`heuristics/when-to-abstract.md`](../../heuristics/when-to-abstract.md).

## Related

- [`heuristics/when-to-create-component.md`](../../heuristics/when-to-create-component.md)
- [`docs/style-guide.md`](../../docs/style-guide.md)

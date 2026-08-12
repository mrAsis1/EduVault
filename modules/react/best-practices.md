# React: Best Practices

The enforceable rules are
[`.github/instructions/react.instructions.md`](../../.github/instructions/react.instructions.md):
functional components, hooks, composition, and accessibility — always;
prop drilling, large components, and inline functions as props —
avoid; custom hooks and memoization when useful — prefer. This file
explains the reasoning and shows what following each rule looks like
in practice. It does not add new rules.

## Functional components, hooks

Class components carry lifecycle methods that scatter one concern
(e.g. "sync with the URL") across `componentDidMount`,
`componentDidUpdate`, and `componentWillUnmount`. A `useEffect` keeps
that same concern in one place. This is why
`react.instructions.md` requires hooks over classes for new code.

## Composition over prop drilling

If a prop is only being passed through a component to reach a
grandchild, that component doesn't need the prop — pass the grandchild
itself as `children` or a render prop instead. See
[`heuristics/when-to-use-context.md`](../../heuristics/when-to-use-context.md)
for when the better fix is Context instead of restructuring.

## Avoid inline functions as props, where it matters

`react.instructions.md` avoids inline functions as a category, but the
practical version: it matters when the prop is passed to a component
wrapped in `React.memo` (a new function reference defeats the memo
every render) or into a large list. It does not matter for a small,
unmemoized leaf component — don't add `useCallback` there just because
the rule exists. See
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"no speculative optimization."

## Accessibility is not optional

`role`, `aria-*` attributes, and real semantic elements (`<button>`,
not a `<div onClick>`) are part of "always," not a nice-to-have pass at
the end. See [`principles/accessibility.md`](../../principles/accessibility.md)
for the full reasoning and
[`examples/good-component-example.md`](../../examples/good-component-example.md)
for what this looks like in a real component.

## Custom hooks: extract for reuse, not for its own sake

Extract a hook when the same stateful logic is needed in more than one
component — see
[`heuristics/when-to-create-hook.md`](../../heuristics/when-to-create-hook.md).
A hook used by exactly one component is often just that component's
logic with extra indirection.

## Related

- [`.github/instructions/react.instructions.md`](../../.github/instructions/react.instructions.md)
- [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)
- [`principles/component-design.md`](../../principles/component-design.md)

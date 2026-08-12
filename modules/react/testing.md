# React: Testing

General testing rules (one behavior per test, mock external
dependencies, don't test implementation details) live in
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
and [`docs/testing.md`](../../docs/testing.md). This file is what those
rules look like for React components, using React Testing Library
(RTL) as the reference tool.

## Test through the rendered output, not internals

RTL's design enforces
[`docs/testing.md`](../../docs/testing.md)'s "why implementation
details aren't tested" — there's no supported way to reach into a
component's internal state. Query by what a user would see: role,
label, text — not by component internals or CSS class.

```tsx
// Wrong: coupled to implementation
expect(wrapper.state("isOpen")).toBe(true);

// Right: coupled to observable behavior
expect(screen.getByRole("dialog")).toBeInTheDocument();
```

## Don't snapshot logic-heavy components

A snapshot test doesn't express intent — it just says "whatever this
renders now." Per `docs/testing.md`'s "coverage as a signal, not a
target," reserve snapshots for genuinely presentational components
with little logic (e.g. an icon wrapper). For anything with
conditional rendering or state, write assertions that state the
expected behavior explicitly.

## Testing hooks in isolation

Extracted hooks (per
[`heuristics/when-to-create-hook.md`](../../heuristics/when-to-create-hook.md))
should be tested independently with `renderHook`, not only indirectly
through every component that uses them — this is what makes the
extraction actually pay off in testability.

```tsx
const { result } = renderHook(() => useCountdown(10));
expect(result.current).toBe(10);
```

## Mock at the network boundary, not the component boundary

Per `.github/instructions/testing.instructions.md`'s "mock external
dependencies," mock the fetch/HTTP layer (e.g. with MSW) rather than
mocking your own hook that wraps it — testing through the hook with a
mocked network response catches more real bugs (loading states, error
handling) than mocking the hook away entirely.

## Accessibility assertions belong in the same test

If a component claims `role="alert"` or specific `aria-label`s (per
[`principles/accessibility.md`](../../principles/accessibility.md)),
assert on them the same way a screen reader user would encounter them
— `getByRole`, not `getByTestId`, wherever a real accessible query
exists.

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
- [`principles/testing.md`](../../principles/testing.md)
- [`examples/good-component-example.md`](../../examples/good-component-example.md)

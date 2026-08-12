# React: Common Mistakes

Recurring failure patterns specific to React. General debugging
process is [`workflows/bug-fix.md`](../../workflows/bug-fix.md); this
file is about recognizing React-specific root causes before you get
that far.

## Stale closures in `useEffect`/`useCallback`

A function created inside a component captures the props/state values
from the render it was created in. If it's used inside a `useEffect`
without being in the dependency array, it can act on stale data.

```tsx
// Wrong: `count` is captured at mount, never updates
useEffect(() => {
  const interval = setInterval(() => console.log(count), 1000);
  return () => clearInterval(interval);
}, []); // missing `count`

// Right: include the dependency, or use a functional update
useEffect(() => {
  const interval = setInterval(() => console.log(count), 1000);
  return () => clearInterval(interval);
}, [count]);
```

## Missing or wrong `useEffect` dependencies

Both directions are a bug: missing a dependency causes stale-closure
behavior above; over-including unstable values (a new object/array
literal each render) causes an infinite effect loop. The fix is
usually to memoize the value or move it inside the effect, not to
suppress the lint rule.

## Mutating state directly

```tsx
// Wrong: mutates the array in place, React won't re-render
items.push(newItem);
setItems(items);

// Right: create a new reference
setItems([...items, newItem]);
```

React compares state by reference for most types. Mutating in place
means the reference is unchanged, so React has no signal to re-render.

## Using array index as `key` for lists that reorder

Index keys are fine for a static list that never reorders, filters, or
has items inserted/removed. Once the list changes shape, index keys
cause React to misattribute state to the wrong item (a text input's
content "jumping" to a different row is the classic symptom). Use a
stable, unique ID from the data instead.

## `useState` for values that should be derived

```tsx
// Wrong: fullName can drift out of sync with firstName/lastName
const [fullName, setFullName] = useState("");

// Right: derive it
const fullName = `${firstName} ${lastName}`;
```

If a value can be computed from existing state or props, storing it
separately creates a second source of truth that can desync. See
[`decision-trees/state-management.md`](../../decision-trees/state-management.md)
on keeping derived state derived.

## Related

- [`.github/instructions/debugging.instructions.md`](../../.github/instructions/debugging.instructions.md)
- [`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md)
- [`decision-trees/state-management.md`](../../decision-trees/state-management.md)

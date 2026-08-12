# React: Examples

Worked examples at MAW's quality bar, specific to React. The general
example format and "why this is good" reasoning pattern follows
[`examples/good-component-example.md`](../../examples/good-component-example.md)
— that file is the canonical component example and is not repeated
here.

## Example: extracting a hook to fix a common mistake

Starting point, the stale-closure mistake from
[`common-mistakes.md`](common-mistakes.md):

```tsx
function SearchBox() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchResults(query); // stale if deps are wrong
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

This works, but the debounce logic is generic enough that a second
search-like input elsewhere would duplicate it — per
[`heuristics/when-to-create-hook.md`](../../heuristics/when-to-create-hook.md),
that's the signal to extract:

```tsx
// hooks/use-debounced-value.ts
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timeout);
  }, [value, delayMs]);

  return debounced;
}

// SearchBox.tsx
function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

**Why this is a good example:** the hook is reusable and independently
testable via `renderHook` per [`testing.md`](testing.md); the component
stays focused on rendering, per
[`architecture.md`](architecture.md)'s component-boundary guidance; and
the extraction happened because a second real need was anticipated as
generic (debounced values are common), not because "it might be
reusable someday" — consistent with
[`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md).

## Example: server-authorized action, not just a hidden button

Continuing the security guidance in [`security.md`](security.md):

```tsx
// Client: hides the control, but this alone is not authorization
{user.role === "admin" && <DeleteButton onClick={handleDelete} />}
```

```ts
// Server: the actual enforcement point
export async function DELETE(req: Request) {
  const user = await getAuthenticatedUser(req);
  if (user.role !== "admin") {
    return new Response("Forbidden", { status: 403 });
  }
  // proceed with delete
}
```

**Why this is a good example:** the UI conditional improves the
experience for non-admins, but the `403` on the server is what actually
prevents a non-admin from deleting via a direct API call — matching
[`security.md`](security.md)'s "client-side checks are UX, not
security."

## Related

- [`examples/good-component-example.md`](../../examples/good-component-example.md)
- [`examples/good-feature-plan.md`](../../examples/good-feature-plan.md)

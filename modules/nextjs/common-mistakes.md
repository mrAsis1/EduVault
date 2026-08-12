# Next.js: Common Mistakes

## Marking a whole page `"use client"` for one interactive widget

```tsx
// Wrong: entire page loses server rendering for one button
"use client";
export default function Page() { /* mostly static content + one button */ }

// Right: isolate the interactive part
export default function Page() {
  return (
    <div>
      {/* static content, server-rendered */}
      <LikeButton /> {/* only this is "use client" */}
    </div>
  );
}
```

## Fetching in a Client Component when a Server Component would do

If a component doesn't need interactivity, fetching its data in a
`useEffect` inside a Client Component adds a client-server round trip
that a Server Component wouldn't need. See
[`architecture.md`](architecture.md).

## Forgetting Server Actions are public endpoints

A Server Action called only from one form is still callable directly
with arbitrary input — see
[`best-practices.md`](best-practices.md) and
[`security.md`](security.md).

## Related

- [`architecture.md`](architecture.md)
- [`security.md`](security.md)

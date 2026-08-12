# Next.js: Architecture

Builds on [`modules/react/architecture.md`](../react/architecture.md) —
component boundaries and state placement reasoning there applies
unchanged. This file covers what Next.js adds: the server/client split.

## Server components are the default; client components are the exception

In the App Router, a component is a Server Component unless marked
`"use client"`. Reach for a Client Component only when the component
needs interactivity, browser APIs, or hooks — this mirrors
[`heuristics/when-to-create-component.md`](../../heuristics/when-to-create-component.md)'s
general principle of not adding a boundary without a reason, applied to
the server/client boundary specifically.

## Data fetching moves toward the server

Fetching data directly in a Server Component (an `async` component
body) removes an entire client-server round trip that a `useEffect`
fetch would need. This is the Next.js-specific form of
[`docs/architecture.md`](../../docs/architecture.md)'s "depend on
abstractions at boundaries" — the boundary between your app and the
data source moves to the server, where it's cheaper to cross.

## Route structure mirrors URL structure directly

The App Router's file-based routing means `app/orders/[id]/page.tsx`
*is* the architecture decision for that route — there's no separate
router config to keep in sync, unlike React Router. Route-level code
splitting is automatic as a result.

## Related

- [`modules/react/architecture.md`](../react/architecture.md)
- [`docs/architecture.md`](../../docs/architecture.md)

# Next.js: Best Practices

Builds on [`modules/react/best-practices.md`](../react/best-practices.md).

## Choose rendering strategy per route, deliberately

Static generation, server-side rendering, and client-side rendering
each fit different data freshness needs — see
[`decision-trees/frontend-framework.md`](../../decision-trees/frontend-framework.md)
for the general reasoning. In Next.js this is a per-route choice
(`export const dynamic`, `revalidate`), not an app-wide setting —
default to static where data doesn't change per-request, and be
deliberate, not automatic, about opting into dynamic rendering.

## Server Actions replace many API routes, but aren't a free pass on validation

A Server Action is still a network-exposed endpoint that any client can
call directly, bypassing the form that "calls" it in the UI — validate
input and re-check authorization inside the action itself, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md).

## Keep `"use client"` boundaries small

Marking a large tree `"use client"` pulls everything inside it into
the client bundle, losing the server-rendering benefit for all of it.
Push the boundary as far down the tree as the interactive part
actually requires.

## Related

- [`modules/react/best-practices.md`](../react/best-practices.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)

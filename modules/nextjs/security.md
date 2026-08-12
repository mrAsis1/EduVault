# Next.js: Security

Builds on [`modules/react/security.md`](../react/security.md).

## API routes and Server Actions need the same server-side checks as any API

Next.js makes it easy to forget you've written a backend endpoint — an
API route or Server Action is exactly that, and needs authentication
and authorization checks per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md),
not just a check in the calling component.

## `NEXT_PUBLIC_` prefix is the same boundary as Vite's `VITE_`

Only genuinely public values belong there — see
[`modules/react/security.md`](../react/security.md)'s "secrets don't
belong in client bundles."

## Middleware runs on every matched request — keep it fast and safe

`middleware.ts` executes before route handling; heavy logic there adds
latency to every request it matches, and any auth check there must
still be re-verified server-side in the route itself per defense in
depth.

## Related

- [`modules/react/security.md`](../react/security.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)

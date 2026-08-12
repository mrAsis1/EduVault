# Next.js: Testing

Builds on [`modules/react/testing.md`](../react/testing.md).

## Server Components need integration-level tests, not just RTL

A Server Component that fetches data can't be rendered with the same
`render()` call as a Client Component in the same way — testing them
often means an integration or E2E test hitting a real (or mocked)
route, per [`docs/testing.md`](../../docs/testing.md)'s testing pyramid
guidance on using integration tests at real boundaries.

## Test Server Actions as plain functions, plus the endpoint they expose

A Server Action's core logic can be unit tested by calling the
exported function directly. Separately, since it's a public endpoint
(see [`security.md`](security.md)), an integration test should confirm
unauthorized calls are actually rejected.

## Related

- [`modules/react/testing.md`](../react/testing.md)
- [`docs/testing.md`](../../docs/testing.md)

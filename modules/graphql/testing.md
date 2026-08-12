# GraphQL: Testing

## Test resolvers as functions, independent of the HTTP layer

A resolver can usually be called directly in a unit test with mocked
context/loaders, without spinning up the full GraphQL server — keeps
tests fast and focused on resolver logic, per
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md).

## Integration-test the schema itself

Execute real queries against the schema (via a test client) to confirm
the schema, resolvers, and DataLoader batching work together — this is
[`docs/testing.md`](../../docs/testing.md)'s "integration tests at real
boundaries" applied to the schema as the boundary.

## Test authorization per field, explicitly

Given [`security.md`](security.md)'s "authorize per field," write
tests that request a sensitive field through an unexpected query path
and confirm it's still denied — not just the intended path.

## Related

- [`docs/testing.md`](../../docs/testing.md)
- [`security.md`](security.md)

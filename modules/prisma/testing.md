# Prisma: Testing

## Integration tests against a real (ephemeral) database

Unlike mocking the Prisma client entirely, running integration tests
against a real Postgres instance (via Docker, per
[`modules/docker/testing.md`](../docker/testing.md)) catches real
constraint violations and query bugs that a mocked client can't — this
matches [`docs/testing.md`](../../docs/testing.md)'s "integration tests
at real boundaries."

## Reset state between tests explicitly

Truncate relevant tables (or use a transaction rolled back after each
test) so tests stay independent, per
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)'s
"keep tests independent — no shared mutable state."

## Mock the repository layer for unit tests of services

For a service's own unit tests (not integration tests), mock the
repository interface rather than Prisma directly — keeps the test
about the service's logic, per
[`patterns/repository-pattern.md`](../../patterns/repository-pattern.md).

## Related

- [`docs/testing.md`](../../docs/testing.md)
- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)

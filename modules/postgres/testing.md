# PostgreSQL: Testing

## Integration tests against a real Postgres instance

A real (containerized, per
[`modules/docker/testing.md`](../docker/testing.md)) Postgres instance
catches constraint violations, migration issues, and query behavior a
mocked database layer can't — matching
[`docs/testing.md`](../../docs/testing.md)'s "integration tests at real
boundaries."

## Reset between tests with a transaction rollback or truncate

Keeps tests independent per
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md) —
a transaction opened at test start and rolled back at the end is often
faster than truncating tables.

## Related

- [`docs/testing.md`](../../docs/testing.md)

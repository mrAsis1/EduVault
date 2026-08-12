# Supabase: Testing

## Run tests against a local Supabase instance, not production

The Supabase CLI's local dev stack (`supabase start`) gives a real
Postgres + RLS environment for integration tests — this is
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)'s
"mock external dependencies" applied at the infrastructure level: a
local instance, not a live shared database, is the test double.

## Test RLS policies directly, as their own test subject

A policy is effectively a security rule — test it explicitly (query as
different roles and confirm expected allow/deny), not only implicitly
through application-level tests. This matches
[`workflows/code-review.md`](../../workflows/code-review.md)'s "anything
that touches auth gets extra scrutiny."

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
- [`security.md`](security.md)

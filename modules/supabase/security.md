# Supabase: Security

## RLS is the actual authorization boundary, not the API

This is the single most important thing to get right in a Supabase
project: because the client can query Postgres directly, a missing or
wrong RLS policy is equivalent to a missing authorization check in a
traditional API, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md).
Treat every table without a reviewed RLS policy as effectively public.

## `anon` key is public by design; `service_role` key is not

The `anon` key is meant to be embedded in client code and relies
entirely on RLS for protection. The `service_role` key bypasses RLS and
must be treated as a full secret — see
[`common-mistakes.md`](common-mistakes.md).

## Test policies with actual different users, not just as an admin

A policy that looks correct can still leak data to a user who shouldn't
see it — test by querying as each relevant role/user, not only as the
service role during development.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`decision-trees/authorization.md`](../../decision-trees/authorization.md)

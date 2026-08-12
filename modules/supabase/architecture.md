# Supabase: Architecture

## The client talks to the database more directly than a typical backend

Unlike a traditional Express + ORM setup, Supabase's client libraries
often query Postgres directly from the frontend, secured by Row Level
Security (RLS) rather than an API layer that checks authorization in
application code. This is a real architectural shift, not just a
different client library — see [`security.md`](security.md) for why
RLS becomes the primary enforcement point instead of a secondary
check.

## Edge Functions as the escape hatch for server-only logic

Anything that shouldn't run with the client's permissions (calling a
third-party API with a secret key, complex multi-table logic that's
awkward to express in RLS) belongs in a Supabase Edge Function, which
plays the role `modules/express/architecture.md`'s "routes stay thin;
services own logic" plays in a traditional backend.

## Related

- [`decision-trees/authorization.md`](../../decision-trees/authorization.md)
- [`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)

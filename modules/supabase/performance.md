# Supabase: Performance

Since Supabase is Postgres underneath, see
[`modules/postgres/performance.md`](../postgres/performance.md) for the
general database performance reasoning. This file covers what's
Supabase-specific.

## Select only needed columns and use `.limit()`

The client's query builder makes it easy to fetch entire rows/tables by
default — be explicit about columns and pagination, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"paginate or stream large datasets."

## Realtime subscriptions scale by row, not just by client

Subscribing to a large, high-write table broadcasts every change to
every subscriber — scope subscriptions with filters, and consider
whether polling or a narrower subscription is more appropriate for
high-frequency tables.

## Related

- [`modules/postgres/performance.md`](../postgres/performance.md)

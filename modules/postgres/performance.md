# PostgreSQL: Performance

## `EXPLAIN ANALYZE` before assuming a query is slow for a particular reason

Postgres's query planner shows exactly where time is spent (sequential
scan, missing index, bad join order) — per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md),
this is the profiling step; don't guess which index to add without it.

## Index selectively, not exhaustively

Every index speeds reads on that column but slows every write (each
insert/update must maintain it) — this is a real trade-off per
[`principles/database-design.md`](../../principles/database-design.md),
not a free performance win to apply everywhere.

## Connection pooling (PgBouncer or equivalent) for high-concurrency apps

Postgres connections are relatively expensive; a pooler in front
reduces connection churn — see
[`modules/prisma/performance.md`](../prisma/performance.md) for the
ORM-level version of this same concern.

## Related

- [`principles/database-design.md`](../../principles/database-design.md)
- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)

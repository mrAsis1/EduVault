# PostgreSQL: Common Mistakes

## Missing index on a foreign key column

Postgres doesn't automatically index foreign key columns (unlike the
primary key they reference) — a join or delete cascade on an unindexed
foreign key can be slow at scale. Add the index explicitly.

## `SELECT *` in application queries

Fetches columns the caller doesn't need, including potentially large
ones (a `text`/`jsonb` blob column) — costs bandwidth and memory for no
benefit, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md).

## Long-running transactions holding locks

A transaction left open (e.g. waiting on an external API call inside
`BEGIN`/`COMMIT`) holds row/table locks the whole time, blocking other
queries. Keep transactions scoped to the actual database operations,
not surrounding I/O.

## Related

- [`performance.md`](performance.md)

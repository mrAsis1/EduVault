# PostgreSQL: Best Practices

## Index columns used in `WHERE`, `JOIN`, and `ORDER BY` on large tables

An unindexed column in a frequent query forces a sequential scan —
fine for a small table, a real cost at scale. Add indexes based on
actual query patterns, per
[`principles/database-design.md`](../../principles/database-design.md)'s
"design indexes around real queries," not speculatively on every
column.

## Use transactions for multi-statement operations that must succeed or fail together

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

Without a transaction, a failure between the two statements leaves data
in an inconsistent state — this is the database-level form of
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"handle errors at the right boundary."

## Foreign keys with explicit `ON DELETE` behavior

Decide and state `CASCADE`, `RESTRICT`, or `SET NULL` deliberately per
relationship — an unconsidered default can silently delete or orphan
data.

## Related

- [`principles/database-design.md`](../../principles/database-design.md)

# Soft Delete Column

Standard pattern for marking rows deleted without removing them —
preserves history and avoids cascading hard-delete complexity.

Complies with: `modules/postgres/` conventions, `principles/database-design.md`.

```sql
-- Add to any table that needs soft delete
ALTER TABLE notes ADD COLUMN deleted_at TIMESTAMPTZ;

-- Default query pattern: always filter it out
-- (or bake into an RLS policy / view, per modules/supabase/security.md)
SELECT * FROM notes WHERE deleted_at IS NULL;

-- "Delete"
UPDATE notes SET deleted_at = now() WHERE id = $1;
```

## Notes

- Index `deleted_at` (or a partial index `WHERE deleted_at IS NULL`) if
  the table is queried frequently — an unindexed soft-delete filter on
  a large table is a common source of the N+1/full-scan pattern flagged
  in `verification/performance/common-mistakes.md`.
- If using Supabase, consider enforcing the `deleted_at IS NULL` filter
  in the RLS policy itself rather than relying on every query to
  remember it.

## Related MAW Documents

- `principles/database-design.md`
- `modules/postgres/`
- `verification/performance/checklist.md`

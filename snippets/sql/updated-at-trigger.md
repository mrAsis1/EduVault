# `updated_at` Auto-Update Trigger

Keeps an `updated_at` column current automatically on every row
update, instead of relying on application code to remember to set it
— a common source of stale timestamps.

Complies with: `modules/postgres/` conventions.

```sql
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER notes_set_updated_at
  BEFORE UPDATE ON notes
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();
```

## Related MAW Documents

- `modules/postgres/`
- `snippets/sql/soft-delete-column.md`

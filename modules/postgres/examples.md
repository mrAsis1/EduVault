# PostgreSQL: Examples

## Example: constraint enforcing an invariant application code alone can't guarantee

```sql
CREATE TABLE reservations (
  id UUID PRIMARY KEY,
  room_id UUID NOT NULL REFERENCES rooms(id),
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  CHECK (ends_at > starts_at),
  EXCLUDE USING gist (room_id WITH =, tstzrange(starts_at, ends_at) WITH &&)
);
```

**Why this is a good example:** the `EXCLUDE` constraint makes
double-booking a room physically impossible at the database level,
regardless of race conditions or bugs in application code — a stronger
guarantee than an application-level check-then-insert, matching
[`architecture.md`](architecture.md)'s "constraints enforce invariants
closer to the data than application code can."

## Related

- [`architecture.md`](architecture.md)

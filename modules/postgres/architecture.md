# PostgreSQL: Architecture

## Constraints enforce invariants closer to the data than application code can

A `NOT NULL`, `UNIQUE`, `CHECK`, or foreign key constraint holds even if
application code has a bug — this is
[`principles/database-design.md`](../../principles/database-design.md)'s
"preserve invariants with constraints where possible," concretely: an
invariant enforced only in application code is one bad code path away
from being violated; enforced at the database level, it can't be.

## Normalize by default; denormalize for a measured reason

Postgres's relational model rewards normalized schemas with strong
integrity guarantees. Denormalization (duplicating data for read speed)
is a deliberate trade-off, not a starting point — per
[`principles/database-design.md`](../../principles/database-design.md).

## Related

- [`principles/database-design.md`](../../principles/database-design.md)
- [`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)

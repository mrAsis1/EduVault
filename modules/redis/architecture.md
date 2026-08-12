# Redis: Architecture

## Redis is a cache and ephemeral store, not a system of record

Data in Redis should be reconstructable from the actual system of
record (Postgres, etc.) if lost — treating Redis as the only copy of
important data violates
[`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)'s
"pick one system of record." Session data, rate-limit counters, and
cached query results fit; a user's only copy of their order history
does not.

## Fail open or fail closed, decided deliberately per use case

[`examples/good-feature-plan.md`](../../examples/good-feature-plan.md)'s
rate limiter example makes this trade-off explicit: fail open (allow
the request) when Redis unavailability shouldn't block a more important
flow; fail closed when the thing Redis protects (e.g. a hard spending
limit) must never be bypassed. State which applies for each use, don't
default silently.

## Related

- [`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)
- [`examples/good-feature-plan.md`](../../examples/good-feature-plan.md)

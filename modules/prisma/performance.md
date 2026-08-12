# Prisma: Performance

## Avoid N+1 with `include`/`select`, not application-level loops

See [`common-mistakes.md`](common-mistakes.md). Prisma makes the batched
form (`include`) as easy to write as the N+1 form — default to it.

## Index fields used in `where`/`orderBy` at the schema level

An unindexed field used in frequent queries is a database-level
performance problem no amount of Prisma-side optimization fixes — per
[`principles/database-design.md`](../../principles/database-design.md)'s
"design indexes around real queries," add `@@index` in `schema.prisma`
for measured hot query paths.

## Connection pool sizing matches expected concurrency

Prisma's connection pool defaults may not match a serverless
deployment's concurrency profile (many short-lived instances each
opening connections) — for serverless, use a pooler (e.g. PgBouncer or
Prisma Accelerate) rather than raw per-instance connections.

## Related

- [`principles/database-design.md`](../../principles/database-design.md)
- [`common-mistakes.md`](common-mistakes.md)

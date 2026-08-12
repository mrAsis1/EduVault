# Module: Prisma

Covers Prisma as an ORM/query layer over a relational database. For
database modeling reasoning itself, see `principles/database-design.md`.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Prisma's role: schema as source of truth, generated client |
| [`project-structure.md`](project-structure.md) | Schema and migration organization |
| [`best-practices.md`](best-practices.md) | Schema design, migration workflow |
| [`common-mistakes.md`](common-mistakes.md) | Recurring Prisma failure patterns |
| [`performance.md`](performance.md) | N+1 queries, connection pooling |
| [`security.md`](security.md) | Raw query risk, connection string handling |
| [`testing.md`](testing.md) | Testing against a real or ephemeral database |
| [`examples.md`](examples.md) | Worked examples |

## Relationship to other layers

- [`principles/database-design.md`](../../principles/database-design.md)
- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
- [`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)

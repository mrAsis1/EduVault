# Module: PostgreSQL

General database design reasoning lives in
`principles/database-design.md` and `decision-trees/database-choice.md`.
This module is Postgres-specific: indexing, query planning, constraints.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Schema/constraint-level integrity |
| [`project-structure.md`](project-structure.md) | Migration organization |
| [`best-practices.md`](best-practices.md) | Indexing, constraints, transactions |
| [`common-mistakes.md`](common-mistakes.md) | Recurring Postgres failure patterns |
| [`performance.md`](performance.md) | Query planning, indexing strategy |
| [`security.md`](security.md) | Roles, parameterized queries |
| [`testing.md`](testing.md) | Testing against a real Postgres instance |
| [`examples.md`](examples.md) | Worked examples |

## Relationship to other layers

- [`principles/database-design.md`](../../principles/database-design.md)
- [`decision-trees/database-choice.md`](../../decision-trees/database-choice.md)
- [`modules/prisma/`](../prisma/README.md), [`modules/supabase/`](../supabase/README.md) — ORM/platform layers on top

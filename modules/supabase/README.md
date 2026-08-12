# Module: Supabase

Covers Supabase-specific concerns: Postgres + Row Level Security, auth,
and storage. General database reasoning lives in `principles/database-design.md`
and `decision-trees/database-choice.md`; this module is what's specific
to Supabase's managed layer on top of Postgres.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Where Supabase sits: client, RLS, edge functions |
| [`project-structure.md`](project-structure.md) | Migrations, generated types |
| [`best-practices.md`](best-practices.md) | RLS-first design, client usage |
| [`common-mistakes.md`](common-mistakes.md) | Recurring Supabase failure patterns |
| [`performance.md`](performance.md) | Query and index performance on Postgres |
| [`security.md`](security.md) | RLS as the actual security boundary |
| [`testing.md`](testing.md) | Testing against a local Supabase instance |
| [`examples.md`](examples.md) | Worked examples |

## Relationship to other layers

- [`principles/database-design.md`](../../principles/database-design.md)
- [`decision-trees/authentication.md`](../../decision-trees/authentication.md)
- [`decision-trees/authorization.md`](../../decision-trees/authorization.md)
- [`modules/postgres/`](../postgres/README.md) — general Postgres detail

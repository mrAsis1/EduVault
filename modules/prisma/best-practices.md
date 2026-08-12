# Prisma: Best Practices

## `prisma migrate dev` in development, `prisma migrate deploy` in production

Keep these distinct — `migrate dev` can reset/rebuild the dev database
and generates new migration files; `migrate deploy` only applies
existing, committed migrations, never generates new ones. Applying
`migrate dev` in production risks the exact "manual dashboard change"
drift problem described in
[`modules/supabase/common-mistakes.md`](../supabase/common-mistakes.md),
just via the wrong command instead of a UI.

## Model relationships explicitly, don't denormalize by default

Use Prisma's relation fields (`@relation`) to keep referential
integrity enforced at the database level, per
[`principles/database-design.md`](../../principles/database-design.md)'s
"preserve invariants with constraints where possible." Denormalize only
for a measured reason.

## Select only the fields you need

`select`/`include` scoped to what the caller actually uses avoids
over-fetching — the ORM equivalent of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md).

## Related

- [`principles/database-design.md`](../../principles/database-design.md)
- [`docs/git-workflow.md`](../../docs/git-workflow.md)

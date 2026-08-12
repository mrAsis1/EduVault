# Supabase: Best Practices

## Design RLS policies before writing client queries

Since the client can query tables directly, RLS policies are the
actual access-control layer, not a backstop — write and test them as
carefully as you would authorization middleware in a traditional
backend, per
[`decision-trees/authorization.md`](../../decision-trees/authorization.md).

## Migrations as the single source of schema truth

Every schema change goes through a migration file, never a manual
change in the Supabase dashboard that isn't captured in version
control — this is
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why `main` can
always be built" applied to schema: an undocumented dashboard change
means the migration history lies about the real schema.

## Use the generated types, don't hand-write query result shapes

`supabase gen types typescript` keeps query result types in sync with
the actual schema — hand-writing them creates the exact drift risk
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002 warns about, just for types instead of docs.

## Related

- [`decision-trees/authorization.md`](../../decision-trees/authorization.md)
- [`templates/database.md`](../../templates/database.md)

# Supabase: Project Structure

```
supabase/
  migrations/               — timestamped SQL migrations, source of truth for schema
  functions/
    <function-name>/         — one Edge Function per directory
  seed.sql                    — local dev seed data
src/
  lib/
    supabase-client.ts         — one configured client instance
  types/
    database.types.ts           — generated from the schema, never hand-edited
```

## Generated types are generated, not authored

`database.types.ts` (via `supabase gen types`) should be regenerated
from migrations, never edited by hand — the same "never hand-edited"
rule as any generated file, per
[`modules/typescript/project-structure.md`](../typescript/project-structure.md).

## Related

- [`docs/git-workflow.md`](../../docs/git-workflow.md) (migrations follow the same one-logical-change-per-commit discipline)
- [`templates/database.md`](../../templates/database.md)

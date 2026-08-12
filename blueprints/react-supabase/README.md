# Blueprint: React + Supabase

SPA backed directly by Supabase — RLS-first, no separate API layer for
data access.

## Stack

React + TypeScript + Vite + Supabase. Governed by `modules/react/`,
`modules/vite/`, `modules/typescript/`, `modules/supabase/`.

## Structure

```
src/
  features/
    <feature-name>/
      components/
      hooks/
      api/              — Supabase queries for this feature only
      types.ts
      index.ts
  lib/
    supabase.ts          — typed client, see snippets/supabase/typed-client.md
  database.types.ts       — generated: `supabase gen types typescript`
supabase/
  migrations/             — SQL migrations, source of truth for schema
vite.config.ts
tsconfig.json
```

## Key architectural note

Authorization lives in RLS policies, not in `api/` query code — per
`modules/supabase/security.md`. A query in `api/` should not re-filter
by user ID if the underlying table's RLS policy already does; see
`snippets/supabase/row-level-query-with-auth.md` for the pattern and
`modules/supabase/common-mistakes.md` for what goes wrong when this is
violated.

## Applies from elsewhere in MAW

- `.github/instructions/react.instructions.md`
- `.github/instructions/typescript.instructions.md`
- `.github/instructions/security.instructions.md`
- `modules/supabase/security.md`, `modules/supabase/testing.md` (test
  against a local Supabase instance, not the hosted one)
- `verification/security/checklist.md`

## Related MAW Documents

- `modules/supabase/`
- `snippets/supabase/`
- `blueprints/react-vite/` (this blueprint extends it with a data layer)

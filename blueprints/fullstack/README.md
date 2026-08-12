# Blueprint: Fullstack (React + Express)

React frontend and Express API as separate deployables in one
repository — distinct from `react-supabase/`, where the "backend" is
Supabase directly; here, a real API layer sits between the frontend
and the database.

## Stack

Composes `blueprints/react-vite/` and `blueprints/express-api/`
unchanged — this blueprint is their combination plus the boundary
between them, not a third implementation of either.

## Structure

```
apps/
  web/                    — blueprints/react-vite/ structure, unchanged
  api/                     — blueprints/express-api/ structure, unchanged
packages/
  shared-types/             — types shared between web and api
                               (request/response shapes), to avoid the
                               same shape being hand-duplicated on both
                               sides — see ADR-0002
```

## Key architectural note

The `web` app talks to `api` over HTTP only — it does not import from
`api/src` directly, and `api` does not import from `web/src`. Shared
request/response types live in `packages/shared-types` so both sides
import the same definition instead of each maintaining their own copy
that can silently drift.

## Applies from elsewhere in MAW

- Everything listed in `blueprints/react-vite/README.md` and
  `blueprints/express-api/README.md` applies to their respective app.
- `playbooks/breaking-change.md` applies specifically here: a
  shared-type change is exactly the kind of change that needs a
  migration path, since both apps consume it.

## Related MAW Documents

- `blueprints/react-vite/`
- `blueprints/express-api/`
- `playbooks/breaking-change.md`

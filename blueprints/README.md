# Blueprints

## Purpose

Project-shape starting points — the folder structure, key config files,
and module wiring for a specific stack combination, grounded in the
`modules/` already documented for each technology involved. Larger than
a `snippets/` entry, smaller than a full `starter-kits/` scaffold: a
blueprint tells you the shape and the key files, not a fully generated
runnable repository.

## Why this isn't a full generated project

A fully generated, runnable starter repo needs decisions this framework
can't make generically — package manager, CI provider, hosting target,
exact dependency versions. Those decisions belong to `starter-kits/`,
which composes a blueprint with those project-specific choices at the
point someone actually starts a project. A blueprint is the reusable
part; a starter kit is the instantiated part.

## What lives here

- `react-vite/` — SPA, no backend.
- `react-supabase/` — SPA backed by Supabase (RLS-first).
- `express-api/` — standalone API server, no frontend.
- `fullstack/` — React frontend + Express API.
- `electron/` — desktop app shell.

## Format

Each blueprint has a `README.md`: stack, folder structure, key config
file contents, and which `modules/` govern each piece — plus the
config files themselves where they're genuinely reusable as-is
(`tsconfig.json`, `.eslintrc`, etc.).

## Related MAW Documents

- `modules/`
- `snippets/` (blueprints compose snippets)
- `starter-kits/`

# PostgreSQL: Project Structure

Migration organization is typically owned by whatever tool sits on top
(Prisma, Supabase CLI, a raw migration tool) — see
[`modules/prisma/project-structure.md`](../prisma/project-structure.md)
or [`modules/supabase/project-structure.md`](../supabase/project-structure.md).
This file covers structure independent of tooling choice.

## Migrations are append-only, numbered, and never edited after being applied anywhere shared

Consistent with
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why no
force-push on shared branches" — editing an applied migration is the
schema equivalent of rewriting shared history.

## Related

- [`templates/database.md`](../../templates/database.md)

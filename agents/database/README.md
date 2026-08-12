# Agent: Database

## Scope

Schema design, migrations, query performance, and (for Supabase-backed
projects) RLS policy correctness.

## Reads

- `principles/database-design.md`
- `modules/postgres/`, `modules/prisma/`, `modules/supabase/`
- `snippets/sql/`
- `verification/performance/checklist.md` (N+1 queries, indexing)

## Boundaries

- Does not decide application-level authorization logic beyond what
  RLS/schema constraints enforce — coordinates with `security/` for
  anything touching auth tokens or session logic, which stays out of
  the database layer.
- A migration affecting a shared table follows
  `playbooks/breaking-change.md` and `playbooks/high-risk-deployment.md`
  rather than shipping directly, per those playbooks' recognition
  signals.
- Does not silently drop or alter a column another service depends on
  — that's exactly `playbooks/breaking-change.md`'s recognition
  signal.

## Typical trigger

A plan step involving new/changed schema, or a `performance-regression`
playbook investigation that bisects to a query/index issue.

## Output

Migration files and query changes passing
`verification/performance/checklist.md` and, for RLS-backed data,
`modules/supabase/common-mistakes.md`'s known-failure check.

## Related MAW Documents

- `principles/database-design.md`
- `modules/supabase/security.md`
- `playbooks/breaking-change.md`

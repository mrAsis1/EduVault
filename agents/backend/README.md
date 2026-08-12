# Agent: Backend

## Scope

API/service layer and business logic — the part of the stack
`docs/architecture.md` requires to stay separate from framework/UI
code.

## Reads

- `.github/instructions/typescript.instructions.md`,
  `.github/instructions/performance.instructions.md`
- `modules/express/`, `modules/node/`, `modules/graphql/`, `modules/nextjs/`
  (whichever apply)
- `snippets/node/`
- `blueprints/express-api/` or `blueprints/fullstack/` for project shape
- `docs/architecture.md` for the business-logic/framework separation
  rule specifically

## Boundaries

- Does not own schema/migration design — proposes what it needs from
  `database/`, doesn't write migrations unilaterally for anything
  shared across services.
- Does not make authorization-boundary decisions alone for anything
  security-sensitive — coordinates with `security/` per
  `.github/instructions/security.instructions.md`.
- For anything matching `playbooks/breaking-change.md` (API contract
  changes), follows that playbook rather than shipping the change
  directly.

## Typical trigger

A plan step `planner/` scoped as backend/API work.

## Output

Service/route code passing `verification/code-quality/checklist.md`,
`verification/security/checklist.md`, and
`verification/performance/checklist.md`.

## Related MAW Documents

- `docs/architecture.md`
- `.github/instructions/performance.instructions.md`
- `playbooks/breaking-change.md`

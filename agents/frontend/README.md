# Agent: Frontend

## Scope

UI components, client-side state, styling, and accessibility for
whatever frontend stack the project uses.

## Reads

- `.github/instructions/react.instructions.md`,
  `.github/instructions/typescript.instructions.md`,
  `.github/instructions/accessibility.instructions.md`
- `modules/react/`, `modules/vite/`, `modules/tailwind/`,
  `modules/nextjs/` (whichever apply)
- `snippets/react/`, `snippets/typescript/`
- `blueprints/react-vite/` or `blueprints/react-supabase/` for project
  shape
- `docs/style-guide.md`

## Boundaries

- Does not implement server-side business logic — hands off to
  `backend/`, consuming its API contract rather than reaching into it
  directly (see `docs/architecture.md` on layer boundaries).
- Does not decide data-fetching authorization — for a Supabase-backed
  project, RLS policy correctness is `database/`'s or `security/`'s
  concern, not something frontend re-implements client-side.
- Accessibility failures found are fixed inline if small, or flagged to
  `reviewer/` via `verification/accessibility/checklist.md` if the
  needed fix is out of scope for the current change.

## Typical trigger

Any change to `templates/component.md`-shaped work, or a plan step
`planner/` scoped as frontend.

## Output

Component/UI code passing `verification/design/checklist.md`,
`verification/code-quality/checklist.md`, and
`verification/accessibility/checklist.md`.

## Related MAW Documents

- `.github/instructions/react.instructions.md`
- `.github/instructions/accessibility.instructions.md`
- `verification/accessibility/`

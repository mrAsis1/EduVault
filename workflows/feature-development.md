# Feature Development Workflow

Invoked by `.github/prompts/plan-feature.md` (planning) and
`.github/prompts/implement.md` (execution).

## 1. Plan

- Restate the goal in one or two sentences.
- List requirements and explicit acceptance criteria.
- Identify architectural impact — does this fit existing patterns per
  `docs/architecture.md`, or does it need a new one?
- Identify edge cases before writing code.
- Use `templates/feature.md` to structure the plan.
- Stop and wait for approval before implementing.

## 2. Set up

- Branch from `main`: `feat/<short-description>`, per
  `docs/git-workflow.md`.
- Confirm the approved plan is the reference point for scope — anything
  outside it is a separate change.

## 3. Implement

- Apply all matching `.github/instructions/*.instructions.md` for each
  file type touched.
- Write code and its tests together, not tests deferred to the end.
- Keep commits scoped to one logical change each, per
  `.github/instructions/git.instructions.md`.
- If the plan turns out to be wrong or incomplete mid-implementation,
  stop and flag the deviation rather than silently improvising.

## 4. Verify

- Run the full test suite, not just new tests.
- Re-check each acceptance criterion from step 1 explicitly.
- Confirm no unrelated files were touched (scope check).

## 5. Review

- Open a PR into `main`.
- Follow `workflows/code-review.md`.

## 6. Document

- Update any `docs/*.md` or `README.md` affected by the change, in the
  same PR, per `.github/instructions/documentation.instructions.md`.

## 7. Merge

- Squash or rebase merge once approved and CI is green, per
  `docs/git-workflow.md`.

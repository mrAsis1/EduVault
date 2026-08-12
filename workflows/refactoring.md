# Refactoring Workflow

Invoked by `.github/prompts/refactor.md`. This workflow changes structure
only — external behavior must not change.

## 1. Justify the refactor

- State the specific smell being addressed (duplication, poor naming,
  tangled responsibilities, circular dependency, etc.) per
  `docs/architecture.md`.
- A refactor needs a concrete reason — "cleaner" alone isn't sufficient
  justification.

## 2. Confirm a safety net exists

- Confirm existing tests cover the behavior of the code being refactored.
- If coverage is missing, write characterization tests first that lock in
  current behavior before changing structure.

## 3. Branch

- `refactor/<short-description>`, per `docs/git-workflow.md`.

## 4. Refactor in small steps

- Make one structural change at a time (extract function, rename, move
  module) and re-run tests after each step.
- Do not mix in new features or bug fixes — those are separate changes
  per `.github/instructions/git.instructions.md`.
- If a public API must change, flag it explicitly as a breaking change.

## 5. Verify behavior is unchanged

- Full test suite passes without modification to test *assertions*
  (test structure/imports may need updates, but expected outcomes should
  not).
- If a test needed its expected outcome changed, that's a sign behavior
  changed — stop and re-evaluate whether this is still "just" a refactor.

## 6. Review and merge

- Follow `workflows/code-review.md`.
- PR description states: the smell addressed, what changed structurally,
  and confirmation that behavior is unchanged.

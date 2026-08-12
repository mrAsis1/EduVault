# Bug Fix Workflow

Invoked by `.github/prompts/debug.md`. Rules referenced throughout:
`.github/instructions/debugging.instructions.md`.

## 1. Reproduce

- Reproduce the bug before doing anything else.
- If reproduction isn't possible with available information, stop and
  state exactly what's missing (logs, input, environment, steps) — do
  not guess at a fix.
- Use `templates/bug.md` to record the reproduction steps.

## 2. Diagnose

- Trace the issue to its root cause, not just where the symptom appears.
- Check whether the same root cause affects other code paths.
- State the root cause explicitly before proposing a fix.

## 3. Fix

- Branch: `fix/<short-description>`, per `docs/git-workflow.md`.
- Scope the fix to the root cause only — no unrelated changes bundled in.
- Do not silence the error (empty catch, swallowed exception) as a
  substitute for fixing it.

## 4. Add a regression test

- Write a test that fails before the fix and passes after.
- This test must exercise the root cause, not just the originally
  reported symptom.

## 5. Verify

- Run the full test suite.
- Confirm the original reproduction steps no longer trigger the bug.

## 6. Review and merge

- Follow `workflows/code-review.md`.
- PR description states: root cause, fix, regression test added.

Implement the approved plan.

Preconditions:

- A plan produced by `plan-feature.md` has been approved.
- If no approved plan exists, stop and request one first.

Do:

1. Follow `workflows/feature-development.md` step by step.
2. Apply all matching `.github/instructions/*.instructions.md` for each
   file type you touch.
3. Write code and tests together — do not defer tests.
4. Keep commits scoped per `.github/instructions/git.instructions.md`.

Do NOT:

- Deviate from the approved plan without flagging the deviation first.
- Introduce new architectural patterns — escalate to `plan-feature.md` instead.
- Skip validation or error handling to move faster.

Output when done:

- List of files changed
- Commit message(s) used
- Any deviations from the plan and why
- Suggested follow-ups (not implemented, just noted)

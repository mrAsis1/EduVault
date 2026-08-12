Refactor the target code.

Do NOT change external behavior. This is a structural change only.

Before starting:

1. Confirm current test coverage exists for the target code.
   If it doesn't, add characterization tests first.
2. State the specific smell being addressed (duplication, poor naming,
   tangled responsibilities, etc.) — refactors need a reason, not a vibe.

Follow `workflows/refactoring.md` for the step-by-step process.
Apply `.github/instructions/architecture.instructions.md` for structural
decisions.

Do NOT:

- Mix refactoring with new features or bug fixes in the same change
- Change public APIs without flagging it as a breaking change
- Rewrite working code beyond the stated scope

Output when done:

- What changed structurally and why
- Confirmation tests still pass unmodified (or what test changes were
  necessary and why)
- Files changed
- Commit message

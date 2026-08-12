Diagnose and fix the reported issue.

Follow `workflows/bug-fix.md` and `.github/instructions/debugging.instructions.md`.

Do:

1. Reproduce the issue first. If you can't, state exactly what's missing.
2. Identify root cause — trace it, don't guess.
3. Propose the fix and explain why it addresses the root cause, not the symptom.
4. Add a regression test that fails without the fix.

Do NOT:

- Propose a fix before stating the root cause
- Bundle unrelated cleanup into the fix
- Silence the error instead of fixing it

Output when done:

- Root cause
- Fix applied
- Regression test added
- Files changed
- Commit message

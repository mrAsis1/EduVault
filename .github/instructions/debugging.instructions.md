---
applyTo: "**/*"
---

Before fixing a bug, always:

- Reproduce it first — do not fix what you can't reproduce or explain
- Identify root cause, not just the symptom location
- Check if the same root cause affects other code paths

Always:

- Add a regression test that fails before the fix and passes after
- State the root cause explicitly before proposing a fix
- Keep the fix scoped to the bug — no unrelated changes in the same commit

Avoid:

- Silencing errors (empty catch blocks, swallowed exceptions) as a "fix"
- Fixing symptoms in multiple places instead of the one root cause
- Guessing at a fix without reproducing — propose a diagnosis step instead

If reproduction isn't possible with available information, state exactly
what's missing (logs, input, environment) before proposing changes.
Step-by-step debugging process lives in `workflows/bug-fix.md`.

Review the target diff or PR.

Follow `.github/instructions/review.instructions.md` for what to check and
`workflows/code-review.md` for process.

Do:

1. Check correctness, clarity, consistency, test coverage, security, scope.
2. Give specific, line-referenced feedback.
3. Separate blocking issues from suggestions explicitly.

Do NOT:

- Nitpick style already handled by linting/formatting
- Approve with unresolved blocking issues
- Rewrite the author's code instead of describing the needed change

Output when done, in this order:

1. Summary (2-3 sentences)
2. Blocking issues (if any)
3. Suggestions (if any)
4. Verdict: Approve / Approve with suggestions / Request changes

# Git: Examples

## Example: interactive rebase to clean up local history before a PR

```
# 3 messy local commits: "wip", "fix", "feat(auth): add reset flow"
git rebase -i HEAD~3
```

```
pick a1b2c3d wip
squash e4f5g6h fix
reword h7i8j9k feat(auth): add reset flow
```

Results in one clean commit, `feat(auth): add reset flow`, matching
[`.github/instructions/git.instructions.md`](../../.github/instructions/git.instructions.md)'s
format — done before pushing, so no shared history is rewritten.

## Example: resolving a merge conflict deliberately, not by guessing

```
git fetch origin
git rebase origin/main
# conflict in src/orders/service.ts
```

Open the file, read both sides of the conflict markers, and resolve
based on understanding what each change was trying to do — not by
mechanically picking "ours" or "theirs" for the whole file. Run the
test suite after resolving, before continuing the rebase, per
[`workflows/code-review.md`](../../workflows/code-review.md)'s
correctness-first review standard applying to your own resolution too.

## Related

- [`best-practices.md`](best-practices.md)

# Git: Common Mistakes

## Force-pushing a branch others have pulled

```
# Only safe on a branch only you have pulled
git push --force-with-lease origin feat/my-local-only-branch
```

`--force-with-lease` at least fails safely if someone else pushed in
the meantime; plain `--force` doesn't. Either way, see
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why no
force-push on shared branches" — this is never appropriate on `main`
or a branch others are actively working from.

## Committing directly to `main`, even "just this once"

Bypasses CI and review entirely — the one guarantee
[`docs/git-workflow.md`](../../docs/git-workflow.md) says `main` gets
("always deployable") depends on nothing skipping that path, not even
a trivial fix.

## Bundling an unrelated fix into a feature commit

```
# Wrong: one commit, two unrelated changes, hard to revert independently
git commit -m "feat(auth): add password reset, fix typo in header"

# Right: two commits
git commit -m "fix(ui): correct header typo"
git commit -m "feat(auth): add password reset"
```

Per [`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why one
logical change per commit" — reverting the feature later would also
revert the unrelated typo fix.

## Related

- [`best-practices.md`](best-practices.md)

# Git: Best Practices

The rules (commit format, one logical change per commit, branch
naming) are in
[`.github/instructions/git.instructions.md`](../../.github/instructions/git.instructions.md).
This file is the day-to-day mechanics of actually following them.

## Stage intentionally, not with `git add .` by default

`git add -p` (patch mode) lets you review and stage hunks individually
— this is what actually makes "one logical change per commit" achievable
when you've been working on more than one thing in the same session.
`git add .` staging everything unreviewed is how unrelated changes end
up bundled into one commit, the exact thing
[`git.instructions.md`](../../.github/instructions/git.instructions.md)
says not to do.

## Write the commit message before you're tempted to skip it

`git commit` (no `-m`) opens an editor and makes the body genuinely
easy to write — "why, not what," per
[`docs/git-workflow.md`](../../docs/git-workflow.md). A quick `-m
"fix"` under time pressure is where commit message quality actually
erodes.

## Rebase local, unpushed commits to clean up before opening a PR

Squashing "wip" or "fix typo" commits into their logical parent before
pushing keeps history readable without ever force-pushing a *shared*
branch — consistent with
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why no
force-push on shared branches" (this only applies once others may have
pulled the branch; your own unpushed local history is fair game).

## Related

- [`docs/git-workflow.md`](../../docs/git-workflow.md)
- [`.github/instructions/git.instructions.md`](../../.github/instructions/git.instructions.md)

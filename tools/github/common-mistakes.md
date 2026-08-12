# GitHub: Common Mistakes

## No branch protection on `main`

Without it, "never commit directly to main" is a convention anyone can
break by accident — see [`best-practices.md`](best-practices.md).

## Approving a PR with unresolved blocking comments left open

`workflows/code-review.md`'s verdict step requires blocking issues
resolved before merge — GitHub lets you approve and merge anyway if
that's not enforced via required review settings, which quietly
defeats the review process.

## Squash-merging with a meaningless auto-generated commit message

If squash merge is the strategy (per
[`docs/git-workflow.md`](../../docs/git-workflow.md)), GitHub's default
squash message concatenates every commit's -m text — worth editing to a
single, real conventional-commit-format summary before confirming the
merge, not accepting the default unedited.

## Related

- [`best-practices.md`](best-practices.md)

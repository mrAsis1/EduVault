# GitHub: Best Practices

## Branch protection enforces what instructions alone can't

`.github/instructions/git.instructions.md` states "never commit
directly to main" as a rule an agent follows — a branch protection rule
requiring PR + passing CI is what makes that true even for a human
who forgets. Enforce structurally what you can, per
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s reasoning for
why `main` must always be deployable.

## PR templates encode `workflows/code-review.md`'s checklist

A `.github/PULL_REQUEST_TEMPLATE.md` that prompts for root cause,
scope, and testing (mirroring
[`examples/good-pr-description.md`](../../examples/good-pr-description.md))
means every PR arrives with what a reviewer needs, rather than a
reviewer having to ask for it after the fact.

## Issue templates separate bug reports from feature requests

Matching the distinction already established between
[`templates/bug.md`](../../templates/bug.md) and
[`templates/feature.md`](../../templates/feature.md) — a GitHub issue
template can literally embed those same sections, so triage starts
with structured information instead of free text.

## Related

- [`workflows/code-review.md`](../../workflows/code-review.md)
- [`examples/good-pr-description.md`](../../examples/good-pr-description.md)

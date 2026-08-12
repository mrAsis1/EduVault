# Claude: Example Prompts

Worked examples of invoking existing MAW workflows through Claude
specifically. These don't introduce new process — they show the
Claude-specific phrasing that reliably triggers the workflow already
defined elsewhere.

## Planning a feature

```
Follow .github/prompts/plan-feature.md for this: [describe the feature].
Do not write code yet — wait for my approval on the plan.
```

Maps to [`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md) →
[`workflows/feature-development.md`](../../workflows/feature-development.md).

## Debugging

```
Follow .github/prompts/debug.md. Here's the issue: [describe the bug,
including repro steps if you have them].
```

Maps to [`.github/prompts/debug.md`](../../.github/prompts/debug.md) →
[`workflows/bug-fix.md`](../../workflows/bug-fix.md).

## Reviewing a diff

```
Follow .github/prompts/review.md on this diff: [paste diff or describe
the PR]. Give me blocking issues separately from suggestions.
```

Maps to [`.github/prompts/review.md`](../../.github/prompts/review.md) →
[`workflows/code-review.md`](../../workflows/code-review.md).

## Why these stay this short

Per [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002, the actual process detail lives in the linked workflow files
— repeating it here would create a second copy to keep in sync. These
examples only show *how to invoke* the workflow through Claude, not
what the workflow does.

## Related

- [`.github/prompts/`](../../.github/prompts/)

# Codex: Example Prompts

Worked examples invoking existing MAW workflows through Codex
specifically — no new process, just Codex-specific phrasing that
reliably triggers the workflow defined elsewhere.

## Planning a feature

```
Follow .github/prompts/plan-feature.md for this: [describe the feature].
Do not write code yet — wait for my approval on the plan.
```

Maps to [`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md) →
[`workflows/feature-development.md`](../../workflows/feature-development.md).

## Debugging

```
Follow .github/prompts/debug.md. Here's the issue: [describe the bug].
```

Maps to [`.github/prompts/debug.md`](../../.github/prompts/debug.md) →
[`workflows/bug-fix.md`](../../workflows/bug-fix.md).

## Reviewing a diff

```
Follow .github/prompts/review.md on this diff: [paste diff]. Give me
blocking issues separately from suggestions.
```

Maps to [`.github/prompts/review.md`](../../.github/prompts/review.md) →
[`workflows/code-review.md`](../../workflows/code-review.md).

## Related

- [`.github/prompts/`](../../.github/prompts/)

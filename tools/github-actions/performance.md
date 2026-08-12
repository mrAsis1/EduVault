# GitHub Actions: Performance

## Cache dependencies between runs

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: npm-${{ hashFiles('package-lock.json') }}
```

Avoids reinstalling identical dependencies on every run — the CI form
of [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"caching with clear invalidation" (the lockfile hash is the
invalidation key).

## Parallelize independent jobs instead of one long serial pipeline

Lint, unit tests, and type-check are usually independent — running
them as separate parallel jobs instead of sequential steps in one job
shortens feedback time without changing what's checked.

## Use a matrix only when genuinely needed

Testing across multiple Node/OS versions multiplies run time and cost
by the matrix size — justified when the project genuinely supports
multiple environments, not by default, per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)'s
general "don't add cost without a real need."

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)

# GitHub Actions: Examples

## Example: CI workflow matching workflows/feature-development.md's verify step

```yaml
name: CI
on: pull_request

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test
```

**Why this is a good example:** `permissions` is scoped to read-only
(per [`security.md`](security.md)), dependency caching is handled by
`setup-node`'s built-in cache (per [`performance.md`](performance.md)),
and the steps directly enforce
[`workflows/feature-development.md`](../../workflows/feature-development.md)'s
"run the full test suite, not just new tests."

## Related

- [`workflows/feature-development.md`](../../workflows/feature-development.md)

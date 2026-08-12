# GitHub Actions: Common Mistakes

## Using `pull_request_target` with untrusted checkout

`pull_request_target` runs with access to repo secrets even for PRs
from forks — combined with checking out and running the PR's own code,
this lets an external contributor's PR exfiltrate secrets. Use plain
`pull_request` for untrusted code, or `pull_request_target` only
without checking out/running the fork's code.

## Pinning third-party actions to a mutable tag

```yaml
# Risky: `v3` can be moved to point at different, potentially compromised code
- uses: some-org/some-action@v3

# Safer: pinned to an immutable commit SHA
- uses: some-org/some-action@a1b2c3d4...
```

See [`security.md`](security.md).

## No caching, rebuilding dependencies from scratch every run

Slows every single CI run for no benefit — see
[`performance.md`](performance.md).

## Related

- [`security.md`](security.md)
- [`performance.md`](performance.md)

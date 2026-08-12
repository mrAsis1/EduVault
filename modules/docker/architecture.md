# Docker: Architecture

## Multi-stage builds separate build-time from run-time concerns

A build stage (compilers, dev dependencies, source) and a final,
minimal runtime stage are architecturally distinct — mixing them means
shipping build tooling and dev dependencies into production, larger and
riskier than necessary. This is
[`foundations/separation-of-concerns.md`](../../foundations/separation-of-concerns.md)
applied to the build pipeline itself.

## Environments should be as similar as possible

[`docs/deployment.md`](../../docs/deployment.md)'s "environments should
be as similar as possible" is Docker's core value proposition — the
same image runs in local dev, CI, and production, removing "works on my
machine" as a category of bug.

## Related

- [`docs/deployment.md`](../../docs/deployment.md)
- [`foundations/separation-of-concerns.md`](../../foundations/separation-of-concerns.md)

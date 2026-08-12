# Docker Desktop: Performance

## Allocate enough CPU/memory for the full local stack

A multi-service `docker-compose` (app + database + cache) needs more
than Docker Desktop's conservative defaults on most machines — under-
allocation causes slow builds and containers being OOM-killed, which
looks like an application problem rather than a resource one. See
[`common-mistakes.md`](common-mistakes.md).

## Use bind-mount caching options on macOS/Windows for large `node_modules`

Cross-platform filesystem sync (host ↔ container) is a known slow
point for large dependency directories — a named volume for
`node_modules` specifically (rather than bind-mounting it) usually
outperforms mounting the whole project directory including
dependencies.

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)

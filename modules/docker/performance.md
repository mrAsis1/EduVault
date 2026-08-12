# Docker: Performance

## Layer caching is the primary build-speed lever

See [`best-practices.md`](best-practices.md)'s instruction ordering.
Measure build time before and after reordering to confirm the cache is
actually being hit, per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md).

## Minimize final image size

A smaller image pulls faster on deploy and has a smaller attack
surface. Multi-stage builds, `alpine`/`distroless` base images, and
`.dockerignore` all contribute — see
[`architecture.md`](architecture.md).

## Related

- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)
- [`best-practices.md`](best-practices.md)

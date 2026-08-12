# Docker: Best Practices

## Order Dockerfile instructions from least to most frequently changing

```dockerfile
# Right: dependency install is cached unless package.json changes
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
```

Copying dependency manifests and installing before copying the rest of
the source lets Docker's layer cache skip the install step when only
application code changes — this is
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"caching with clear invalidation" applied to build layers.

## Multi-stage builds for a minimal final image

Build with full tooling in one stage, copy only the compiled output
into a slim final stage (e.g. `node:20-alpine` or `distroless`) — see
[`architecture.md`](architecture.md).

## Pin base image versions

`FROM node:20` (not `node:latest`) keeps builds reproducible — an
unpinned tag can silently change what's built between runs, which
`docs/git-workflow.md`'s deployability guarantee depends on being
stable.

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
- [`architecture.md`](architecture.md)

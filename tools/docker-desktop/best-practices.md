# Docker Desktop: Best Practices

## Use `docker-compose.override.yml` for local-only convenience, never for what production needs

Local bind-mounts for hot-reload, exposed debug ports, and relaxed
resource limits belong in an override file
([`modules/docker/project-structure.md`](../../modules/docker/project-structure.md)),
kept separate from the production-shaped `docker-compose.yml` — this
protects [`docs/deployment.md`](../../docs/deployment.md)'s
"environments should be as similar as possible" from local-dev
conveniences quietly becoming assumptions baked into the real image.

## Allocate resources deliberately, not by default

Docker Desktop's default CPU/memory limits are often too low for a
multi-service local stack (app + Postgres + Redis) — see
[`performance.md`](performance.md).

## Related

- [`modules/docker/project-structure.md`](../../modules/docker/project-structure.md)

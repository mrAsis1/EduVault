# Docker Desktop: Examples

## Example: override file for local-only convenience, separate from production shape

```yaml
# docker-compose.yml — shape matches what production actually runs
services:
  app:
    build: .
    ports:
      - "3000:3000"

# docker-compose.override.yml — local-only, gitignored or clearly marked dev-only
services:
  app:
    volumes:
      - ./src:/app/src   # bind-mount for hot reload, never in production
    environment:
      - DEBUG=true
```

**Why this is a good example:** production's `docker-compose.yml` stays
representative of what actually deploys, per
[`docs/deployment.md`](../../docs/deployment.md), while local
convenience lives entirely in the override file, per
[`best-practices.md`](best-practices.md).

## Related

- [`best-practices.md`](best-practices.md)

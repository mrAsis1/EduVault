# Docker: Testing

## Use Docker Compose to give integration tests real dependencies

Spinning up a real Postgres/Redis container for integration tests (via
`docker-compose.yml`) is more faithful than mocking the database
entirely, matching
[`docs/testing.md`](../../docs/testing.md)'s "integration tests at
boundaries" — see also
[`modules/prisma/testing.md`](../prisma/testing.md).

## Test the actual built image, not just source code, before release

A CI step that builds the real Docker image and runs smoke tests
against it catches Dockerfile-specific issues (missing files, wrong
`CMD`) that running tests against source alone wouldn't — consistent
with [`docs/deployment.md`](../../docs/deployment.md)'s "environments
should be as similar as possible."

## Related

- [`docs/testing.md`](../../docs/testing.md)
- [`docs/deployment.md`](../../docs/deployment.md)

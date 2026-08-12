# Docker Desktop: Common Mistakes

## Local-only config leaking into the shared Dockerfile

A bind-mount or debug flag added directly to the production
`Dockerfile`/`docker-compose.yml` "just for now" during local
debugging, then forgotten, is exactly the drift
[`best-practices.md`](best-practices.md) warns about — use the
override file instead.

## Running out of allocated memory silently

Containers OOM-killed due to Docker Desktop's resource limits can look
like an application bug (a service just "stops responding") rather
than a resource ceiling — check Docker Desktop's resource settings
before deep-diving into application logs for this symptom.

## Related

- [`best-practices.md`](best-practices.md)

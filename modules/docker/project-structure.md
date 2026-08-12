# Docker: Project Structure

```
Dockerfile                  — production image, multi-stage
docker-compose.yml           — local dev services (app, db, cache)
docker-compose.override.yml    — local-only overrides, gitignored if it contains secrets
.dockerignore
```

## `.dockerignore` mirrors `.gitignore`'s intent

`node_modules`, `.env`, and build artifacts shouldn't be copied into
the build context — this keeps builds fast and avoids accidentally
baking local secrets into an image, the same reasoning as
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "why secrets
never live in code," applied to build context instead of git history.

## Related

- [`docs/git-workflow.md`](../../docs/git-workflow.md)

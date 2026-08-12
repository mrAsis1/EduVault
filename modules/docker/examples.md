# Docker: Examples

## Example: multi-stage Dockerfile with caching and non-root user

```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
USER app
CMD ["node", "dist/index.js"]
```

**Why this is a good example:** dependency install is cached separately
from source copy (per [`best-practices.md`](best-practices.md)), the
final image excludes build tooling entirely (per
[`architecture.md`](architecture.md)), and the process runs as a
non-root user (per [`security.md`](security.md)).

## Related

- [`best-practices.md`](best-practices.md)

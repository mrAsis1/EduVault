# Node.js: Project Structure

## Baseline layout

```
src/
  routes/ or controllers/   — thin, per docs/architecture.md
  services/                 — business logic, orchestration
  repositories/               — persistence access, per repository-pattern.md
  middleware/
  lib/                        — framework-agnostic utilities
  config/                       — environment/config loading, one place
index.ts
```

## `config/` is a single source of truth for environment

Reading `process.env.X` scattered across many files makes it hard to
know what configuration the app actually depends on. Centralize env
reading and validation in one `config/` module that the rest of the
app imports from — this also gives one place to validate required env
vars at startup and fail fast, per
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"fail fast on invalid input."

## Related

- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
- [`patterns/service-layer.md`](../../patterns/service-layer.md)

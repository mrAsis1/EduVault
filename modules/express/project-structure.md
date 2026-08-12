# Express: Project Structure

```
src/
  routes/
    orders.routes.ts       — defines paths, delegates to controllers
  controllers/
    orders.controller.ts   — parses request, calls service, shapes response
  services/
    orders.service.ts       — business logic
  repositories/
    orders.repository.ts     — persistence
  middleware/
    auth.middleware.ts
    error.middleware.ts       — registered last
  app.ts                       — middleware registration, route mounting
```

One route file per resource keeps
[`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)'s
"one responsibility per file" concrete for Express specifically.

## Related

- [`modules/node/project-structure.md`](../node/project-structure.md)
- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)

# Blueprint: Express API

Standalone API server, no frontend.

## Stack

Node + Express + TypeScript. Governed by `modules/express/`,
`modules/node/`, `modules/typescript/`. Add `modules/postgres/` or
`modules/prisma/` depending on data layer choice — this blueprint
doesn't presume one.

## Structure

```
src/
  routes/
    <resource>.ts         — route definitions, thin, delegate to services
  services/
    <resource>.ts          — business logic, framework-independent
                              per docs/architecture.md
  middleware/
    error-handler.ts
    auth.ts
  lib/
    env.ts                 — see snippets/node/env-validation.md
  app.ts                    — Express app assembly, no listen() call
  server.ts                  — entrypoint, calls app.listen()
tsconfig.json
```

## Key architectural note

`services/` contains business logic with no Express types imported —
per `docs/architecture.md`'s separation of business logic from
framework code. `routes/` files should be thin enough to read in one
glance: parse input, call a service, shape the response.

## Key config

```ts
// src/app.ts — async routes wrapped per snippets/node/async-handler-wrapper.md
import express from "express";
import { errorHandler } from "./middleware/error-handler";

export function createApp() {
  const app = express();
  app.use(express.json());
  // routes mounted here
  app.use(errorHandler); // last, per Express error-middleware convention
  return app;
}
```

## Applies from elsewhere in MAW

- `.github/instructions/typescript.instructions.md`
- `.github/instructions/security.instructions.md`
- `.github/instructions/performance.instructions.md` (N+1 query
  avoidance applies directly here)
- `docs/architecture.md`
- `verification/security/`, `verification/performance/`

## Related MAW Documents

- `modules/express/`, `modules/node/`
- `snippets/node/`

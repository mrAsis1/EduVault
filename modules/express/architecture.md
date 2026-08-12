# Express: Architecture

Builds on [`modules/node/architecture.md`](../node/architecture.md).

## Routes stay thin; services own logic

A route handler's job is: parse the request, call a service, shape the
response. Business logic in the handler itself violates
[`docs/architecture.md`](../../docs/architecture.md)'s "business logic
stays separate from framework/UI code" — here, Express *is* the
framework code. See
[`patterns/service-layer.md`](../../patterns/service-layer.md).

## Middleware as composable, ordered concerns

Express's middleware chain is a direct, visible instance of
[`foundations/separation-of-concerns.md`](../../foundations/separation-of-concerns.md)
— auth, logging, body-parsing, and error handling are separate
middleware, not interleaved inside route handlers. Order matters:
error-handling middleware must be registered last.

## Related

- [`modules/node/architecture.md`](../node/architecture.md)
- [`patterns/service-layer.md`](../../patterns/service-layer.md)

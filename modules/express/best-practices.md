# Express: Best Practices

## Centralized error-handling middleware

A single error-handling middleware (4-argument signature) at the end
of the chain, with route handlers calling `next(err)` on failure,
keeps error formatting consistent and matches
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"handle errors at the right boundary" — the boundary here is the
outermost middleware, not each individual handler.

## Validate request input at the route boundary

Use a schema validator (Zod, Joi) on `req.body`/`req.query`/`req.params`
before the controller touches them — this is
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"validate and sanitize all external input" applied at Express's actual
entry point.

## `async` route handlers need explicit error forwarding

Express doesn't automatically catch rejected promises in route
handlers (pre—Express 5) — wrap in a try/catch calling `next(err)`, or
use a helper that does this for you.

## Related

- [`principles/error-handling.md`](../../principles/error-handling.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)

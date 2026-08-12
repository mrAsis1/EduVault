# Express: Examples

## Example: centralized error handling matching principles/error-handling.md

```ts
// middleware/error.middleware.ts
export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }
  logger.error(err); // preserve context for diagnosis, per error-handling.md
  return res.status(500).json({ error: "Internal server error" }); // no internal detail leaked
}

// app.ts — registered last
app.use(errorHandler);
```

**Why this is a good example:** expected failures map to specific
status codes with actionable messages; unexpected errors are logged
with full context but return a generic message to the client — matching
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"preserve context without exposing sensitive data."

## Related

- [`principles/error-handling.md`](../../principles/error-handling.md)

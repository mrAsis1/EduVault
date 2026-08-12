# Async Route Handler Wrapper

Wraps an Express async route handler so a rejected promise reaches the
error-handling middleware instead of crashing the process or hanging
the request.

Complies with: `.github/instructions/security.instructions.md` (errors
handled, not swallowed), `modules/express/` conventions.

```ts
import type { Request, Response, NextFunction, RequestHandler } from "express";

export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
): RequestHandler {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}
```

## Usage

```ts
router.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const user = await getUser(req.params.id);
    if (!user) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json(user);
  })
);
```

## Related MAW Documents

- `modules/express/`
- `.github/instructions/security.instructions.md`

# Express: Common Mistakes

## Unhandled rejection in an async route handler

```ts
// Wrong: a rejected promise here crashes the process (pre-Express 5) or hangs the request
app.get("/orders/:id", async (req, res) => {
  const order = await ordersService.get(req.params.id); // throws if not found
  res.json(order);
});

// Right
app.get("/orders/:id", async (req, res, next) => {
  try {
    const order = await ordersService.get(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
});
```

## Registering error middleware before routes

Error middleware must be registered *last*, after all routes — if it's
registered earlier, it never fires for errors in routes defined after
it.

## Trusting `req.body` without validation

See [`security.md`](security.md).

## Related

- [`best-practices.md`](best-practices.md)

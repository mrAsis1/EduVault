# Express: Testing

## Test routes with `supertest`, mocking the service layer

```ts
it("should return 404 when should return 404 when order not found", async () => {
  jest.spyOn(ordersService, "get").mockRejectedValue(new NotFoundError());
  const res = await request(app).get("/orders/missing-id");
  expect(res.status).toBe(404);
});
```

This tests the route/middleware wiring (status codes, error handling)
per [`docs/testing.md`](../../docs/testing.md)'s "integration tests at
boundaries," while the service's actual logic gets its own unit tests.

## Test the error middleware itself

Confirm it maps known error types (validation, not-found, forbidden) to
the correct status codes — this is the contract every route handler
implicitly relies on.

## Related

- [`docs/testing.md`](../../docs/testing.md)
- [`modules/node/testing.md`](../node/testing.md)

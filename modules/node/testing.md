# Node.js: Testing

## Mock the I/O boundary, not the business logic

Per [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)'s
"mock external dependencies (network, filesystem, time)," a service
function's unit test should mock the repository/database call, not
reimplement a fake database — this keeps the test about the service's
logic, not the persistence layer's behavior.

## Testing async code, including rejections

```ts
await expect(fetchUser("invalid-id")).rejects.toThrow("User not found");
```

Explicitly test the rejection path, not just the resolved path — this
is the async form of `docs/testing.md`'s "cover: happy path, edge
cases, error cases."

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
- [`docs/testing.md`](../../docs/testing.md)

# Node.js: Common Mistakes

## Unhandled promise rejections

```ts
// Wrong: rejection is silently swallowed if the caller doesn't await/catch
async function saveOrder(order: Order) {
  await db.orders.insert(order);
}
saveOrder(order); // no await, no .catch

// Right
await saveOrder(order).catch((err) => logger.error(err));
```

## Blocking the event loop with synchronous work

```ts
// Wrong: blocks every other request while this runs
const hash = crypto.createHash("sha256").update(largeBuffer).digest();

// Right: use the async variant, or offload to a worker thread for CPU-heavy cases
crypto.pbkdf2(password, salt, 100000, 64, "sha512", callback);
```

## Not closing/releasing resources on error paths

A database connection or file handle opened in a `try` block, only
released in the success path, leaks on error. Use `finally`, or a
connection pool that handles this automatically.

## Related

- [`architecture.md`](architecture.md)

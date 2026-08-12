# Redis: Common Mistakes

## Caching without a TTL

```ts
// Wrong: never expires, grows unbounded, can go stale forever
await redis.set(`user:${id}`, JSON.stringify(user));

// Right
await redis.set(`user:${id}`, JSON.stringify(user), "EX", 3600);
```

## Using Redis as the only copy of important data

See [`architecture.md`](architecture.md) — a Redis instance restarting
or evicting keys under memory pressure means that data is genuinely
gone if nothing else has it.

## Storing large values that should be paginated

A single Redis key holding a huge JSON blob has to be fully
deserialized on every read — for large or growing collections, use a
Redis structure (list, sorted set) that supports partial reads, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"paginate or stream large datasets."

## Related

- [`architecture.md`](architecture.md)

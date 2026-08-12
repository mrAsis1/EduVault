# Redis: Performance

## Pipeline multiple commands instead of round-tripping one at a time

```ts
// Slower: one network round trip per command
for (const id of ids) await redis.get(`user:${id}`);

// Faster: one round trip for all commands
const pipeline = redis.pipeline();
ids.forEach((id) => pipeline.get(`user:${id}`));
await pipeline.exec();
```

This is the Redis-specific form of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"N+1 queries — batch or join instead."

## Monitor memory usage and eviction policy

Redis is in-memory; an eviction policy (`allkeys-lru`, etc.) determines
what happens under memory pressure — an unconsidered default can evict
keys you assumed were safe. Choose deliberately based on which data is
genuinely disposable (per [`architecture.md`](architecture.md)).

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)

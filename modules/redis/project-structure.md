# Redis: Project Structure

```
src/
  lib/
    redis-client.ts       — one configured client instance
  cache/
    <domain>.cache.ts       — cache read/write logic per domain, not scattered inline
```

## Key naming convention

`<domain>:<entity>:<id>:<field>` (e.g. `session:user:123:cart`) keeps
keys greppable and namespace collisions unlikely as the app grows —
the Redis-specific form of
[`docs/coding-standards.md`](../../docs/coding-standards.md)'s general
naming-consistency reasoning.

## Related

- [`docs/coding-standards.md`](../../docs/coding-standards.md)

# Redis: Examples

## Example: cache-aside pattern with explicit TTL and fail-open

```ts
async function getUserProfile(userId: string): Promise<UserProfile> {
  try {
    const cached = await redis.get(`user:${userId}:profile`);
    if (cached) return JSON.parse(cached);
  } catch (err) {
    logger.warn("Redis unavailable, falling back to database", err);
    // fail open — see architecture.md
  }

  const profile = await db.users.findById(userId);
  await redis.set(`user:${userId}:profile`, JSON.stringify(profile), "EX", 300).catch(() => {});
  return profile;
}
```

**Why this is a good example:** Redis is treated as disposable — a
failure falls back to the system of record rather than breaking the
request, matching [`architecture.md`](architecture.md), and the TTL
(300s) is explicit per [`best-practices.md`](best-practices.md).

## Related

- [`architecture.md`](architecture.md)

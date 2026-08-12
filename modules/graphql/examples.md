# GraphQL: Examples

## Example: DataLoader batching resolver, avoiding N+1

```ts
// loaders/user.loader.ts
export const userLoader = new DataLoader<string, User>(async (ids) => {
  const users = await db.users.findByIds(ids); // one query for all requested IDs
  const byId = new Map(users.map((u) => [u.id, u]));
  return ids.map((id) => byId.get(id));
});

// resolvers/post.resolvers.ts
export const resolvers = {
  Post: {
    author: (post, _args, { loaders }) => loaders.user.load(post.authorId),
  },
};
```

**Why this is a good example:** requesting `author` on a list of 100
posts results in one batched database query, not 100 — matching
[`performance.md`](performance.md)'s "batch with DataLoader as the
default."

## Related

- [`common-mistakes.md`](common-mistakes.md)

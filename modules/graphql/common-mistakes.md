# GraphQL: Common Mistakes

## N+1 queries from naive resolver implementations

```ts
// Wrong: one query per post to fetch its author
const resolvers = {
  Post: {
    author: (post) => db.users.findById(post.authorId), // called once per post in the list
  },
};

// Right: batch with DataLoader
const resolvers = {
  Post: {
    author: (post, args, { loaders }) => loaders.user.load(post.authorId),
  },
};
```

A query requesting a list of posts with their authors triggers one
query per post without batching — the GraphQL-specific instance of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"N+1 queries."

## No query depth or complexity limiting

An unbounded, deeply nested query can be used to exhaust server
resources — see [`security.md`](security.md).

## Authorization checked only at the top-level query, not per field

A field deep in the response tree can expose data the top-level query
check didn't anticipate — see [`security.md`](security.md).

## Related

- [`performance.md`](performance.md)
- [`security.md`](security.md)

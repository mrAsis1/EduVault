# TypeScript: Common Mistakes

## Widening `as const` unnecessarily, or forgetting it

```ts
// Widens to string[], loses the literal union
const roles = ["admin", "user"];

// Preserves the literal union: ("admin" | "user")[]
const roles = ["admin", "user"] as const;
```

`typescript.instructions.md` prefers `as const` unions over enums —
forgetting the assertion silently loses that precision.

## Non-null assertion (`!`) papering over a real null case

`value!` tells the compiler "trust me, this isn't null" without
checking. Outside tests, this is disallowed per
`typescript.instructions.md` because it's usually hiding a genuine
case (empty array, failed lookup) that needs handling, not asserting
away.

## Over-broad `interface` extension creating fragile coupling

Extending a shared base interface across unrelated features couples
them to a common shape that has no reason to stay common. Prefer
composing small, focused types — see
[`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md).

## Implicit `any` from missing function parameter types

Even with `strict: true`, a callback parameter without an explicit
type in some contexts can still infer `any`. Always annotate function
parameters explicitly per `typescript.instructions.md`.

## Related

- [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)
- [`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md)

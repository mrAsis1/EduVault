# Exhaustive Switch Helper

Forces a compile error if a union type gains a new member and a
`switch` statement isn't updated to handle it — catches the mistake at
build time instead of at runtime.

Complies with: `.github/instructions/typescript.instructions.md`
(explicit types, no `any`).

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}
```

## Usage

```ts
type Status = "pending" | "active" | "closed";

function describe(status: Status): string {
  switch (status) {
    case "pending":
      return "Waiting to start";
    case "active":
      return "In progress";
    case "closed":
      return "Finished";
    default:
      return assertNever(status);
      // If a new Status member is added without a case here,
      // this line fails to compile.
  }
}
```

## Related MAW Documents

- `.github/instructions/typescript.instructions.md`
- `snippets/typescript/result-type.md`

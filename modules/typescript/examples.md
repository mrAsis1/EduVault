# TypeScript: Examples

## Example: Result type replacing thrown errors

```ts
type Result<T, E = string> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function parseAge(input: string): Result<number> {
  const n = Number(input);
  if (Number.isNaN(n) || n < 0) {
    return { ok: false, error: "Invalid age" };
  }
  return { ok: true, value: n };
}

const result = parseAge(formInput);
if (!result.ok) {
  showError(result.error);
} else {
  saveAge(result.value);
}
```

**Why this is a good example:** the failure case is part of the
function's signature, so the caller can't forget to handle it (unlike
a thrown exception, which is invisible in the type signature) — per
[`best-practices.md`](best-practices.md) and
[`principles/error-handling.md`](../../principles/error-handling.md).

## Related

- [`examples/good-component-example.md`](../../examples/good-component-example.md)

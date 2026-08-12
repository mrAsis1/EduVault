# Result Type

Explicit success/failure type for functions where throwing would hide
expected failure cases from the type system — the caller is forced to
handle both branches.

Complies with: `.github/instructions/typescript.instructions.md`
(explicit types, no `any`, exhaustive handling).

```ts
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}
```

## Usage

```ts
function parseAge(input: string): Result<number, string> {
  const n = Number(input);
  if (Number.isNaN(n)) return err("not a number");
  if (n < 0) return err("age cannot be negative");
  return ok(n);
}

const result = parseAge(rawInput);
if (!result.ok) {
  console.error(result.error);
} else {
  console.log(result.value);
}
```

## Related MAW Documents

- `.github/instructions/typescript.instructions.md`
- `snippets/typescript/exhaustive-switch.md`

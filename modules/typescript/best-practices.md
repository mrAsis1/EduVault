# TypeScript: Best Practices

Enforceable rules: [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md).
This file explains the reasoning.

## `unknown` over `any`

`any` disables type checking entirely for that value and everything
derived from it — it's a hole, not a type. `unknown` requires a check
or narrowing before use, which is almost always what you actually want
when a type is genuinely not known yet (e.g. `JSON.parse` output).

## Result types over throwing, for expected failures

```ts
// Throws — caller must know to catch, and what type the error is
function parseConfig(raw: string): Config { /* throws on invalid */ }

// Result type — the failure is part of the signature
function parseConfig(raw: string): { ok: true; value: Config } | { ok: false; error: string } { /* ... */ }
```

Reserve `throw` for truly exceptional, programmer-error cases.
Expected failures (invalid input, not-found) are better modeled in the
return type per [`principles/error-handling.md`](../../principles/error-handling.md)'s
"distinguish expected failures from unexpected ones."

## Avoid type assertions as a substitute for real typing

`as SomeType` tells the compiler to trust you — it doesn't check
anything. It's appropriate when you have external knowledge the
compiler can't (e.g. a `querySelector` result you know exists), not as
a shortcut past a type error you don't understand yet.

## Related

- [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)
- [`principles/error-handling.md`](../../principles/error-handling.md)

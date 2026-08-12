# TypeScript: Architecture

General architecture reasoning lives in [`docs/architecture.md`](../../docs/architecture.md).
This file covers how TypeScript's type system supports those boundaries.

## Types as the boundary contract

At a module or API boundary (per [`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)'s
"depend on abstractions at boundaries"), an `interface` is the abstraction.
Consumers depend on the interface shape, not the concrete implementing class —
this is dependency inversion expressed directly in the type system, no DI
framework required.

## Discriminated unions model state honestly

A loading/error/success UI state modeled as three separate optional
booleans allows impossible combinations (`isLoading: true, error: "x"`).
A discriminated union makes the impossible state unrepresentable:

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: T };
```

This is the concrete form `typescript.instructions.md`'s "discriminated
unions for state/result modeling" takes in practice.

## Domain types stay separate from transport types

An API response DTO and a domain type often look similar but shouldn't
be the same type — the API shape changes on the server's schedule, the
domain type on the business rule's schedule. Map explicitly at the
boundary rather than using the DTO throughout the app.

## Related

- [`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)
- [`principles/error-handling.md`](../../principles/error-handling.md)
- [`architecture/hexagonal.md`](../../architecture/hexagonal.md)

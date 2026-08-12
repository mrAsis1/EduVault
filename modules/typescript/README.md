# Module: TypeScript

Enforceable rules live in [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)
(strict mode, explicit return types, `unknown` over `any`, discriminated unions)
and apply automatically to `.ts`/`.tsx` files. This module adds
TypeScript-specific reasoning and detail; it does not restate the rules.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Type-driven boundaries, domain modeling with types |
| [`project-structure.md`](project-structure.md) | Where types live in a project |
| [`best-practices.md`](best-practices.md) | TypeScript-specific do's, tied to `typescript.instructions.md` |
| [`common-mistakes.md`](common-mistakes.md) | Recurring TypeScript failure patterns |
| [`performance.md`](performance.md) | Compile-time and type-checking performance |
| [`security.md`](security.md) | Where types can and can't substitute for runtime validation |
| [`testing.md`](testing.md) | Typing test code, testing type-level logic |
| [`examples.md`](examples.md) | Worked examples |

## Relationship to other layers

- [`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)
- [`docs/coding-standards.md`](../../docs/coding-standards.md)
- [`principles/error-handling.md`](../../principles/error-handling.md) (Result/error types)

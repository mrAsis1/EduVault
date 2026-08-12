# TypeScript: Testing

General testing rules: [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md).

## Type tests for genuinely type-level logic

If a project has non-trivial generic utility types, a type-only test
(asserting a type equals an expected shape, e.g. with `tsd` or
`expectTypeOf`) catches regressions that runtime tests can't see. This
is only worth it for genuinely reusable type utilities — not every
type in the codebase needs one, per
[`docs/testing.md`](../../docs/testing.md)'s "coverage as a signal, not
a target."

## Don't let test files relax type strictness

Test files should use the same `strict: true` config as production
code. Loosening types "just for tests" hides the same class of bug
strict mode exists to catch.

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)

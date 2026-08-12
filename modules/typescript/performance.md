# TypeScript: Performance

This is about compiler/type-checking performance, not runtime — for
runtime performance see the relevant module (e.g. `modules/react/performance.md`).

## Deeply recursive conditional types slow the compiler

Complex mapped/conditional type utilities that recurse deeply can make
`tsc` and editor type-checking noticeably slower across a large
codebase. Prefer simpler, flatter type definitions unless the
recursive utility is solving a real, recurring problem — per
[`heuristics/when-to-abstract.md`](../../heuristics/when-to-abstract.md),
the complexity needs to earn its cost.

## Project references for large monorepos

For a large codebase split into packages, TypeScript project references
let `tsc` incrementally rebuild only changed packages instead of the
whole graph — the type-system equivalent of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"cache with clear invalidation over recomputation."

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)

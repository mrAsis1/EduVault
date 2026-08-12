# Vite: Testing

## Vitest shares Vite's config and transform pipeline

Using Vitest as the test runner means the same `vite.config.ts`
aliases, plugins, and transforms apply in tests as in the app — no
separate Jest config to keep in sync. This reduces the "works in dev,
fails in tests" class of drift.

## General testing rules still apply

Everything in [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
applies regardless of runner — Vitest is a mechanism, not a change to
what "one behavior per test" or "mock external dependencies" means.

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)

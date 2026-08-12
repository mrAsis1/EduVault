# Testing Strategy

## Purpose

Help choose the right mix of unit, integration, and end-to-end tests.

## Why it Matters

Not every risk deserves the same test layer. A good strategy protects the highest-risk behavior without making the suite slow or brittle.

## Core Concepts

- Unit tests cover isolated logic.
- Integration tests cover boundaries between real pieces.
- End-to-end tests cover critical user journeys.

## When to Use

- Use unit tests for pure business rules and edge cases.
- Use integration tests for contracts, persistence, and external boundaries.
- Use E2E tests for the most important flows only.

- Test behavior, not implementation details.
- Keep slower tests focused on business risk.
- Add tests where failures would be expensive to diagnose or recover from.

## When Not to Use

- Relying on E2E tests for everything.
- Writing tests that mirror internal structure instead of behavior.
- Chasing coverage numbers without checking value.

## Benefits

More unit tests are fast and precise.

## Drawbacks

They do not prove integration. More E2E tests prove the real flow, but they are slower and more fragile.

## Example

Test discount math with units, payment wiring with integration tests, and checkout submission with a small number of E2E cases.

## Related MAW Documents

- [Testing](../principles/testing.md)
- [Bug Fix Workflow](../workflows/bug-fix.md)
- [Maintainability](../principles/maintainability.md)

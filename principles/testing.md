# Testing

## Purpose

Explain how tests support confidence without becoming a maintenance burden.

## Why it Matters

Tests catch regressions, document behavior, and make refactoring safer. A good test suite helps the team change code without fear.

## Core Concepts

- Test behavior, not implementation details.
- Match the test type to the risk.
- Keep tests understandable and stable.

## When to Use

- Use unit tests for isolated rules.
- Use integration tests for real boundaries.
- Use end-to-end tests for critical journeys only.

- Write tests that fail for the right reason.
- Keep setup concise and explicit.
- Focus coverage on business value and failure-prone paths.

## When Not to Use

- Chasing coverage percentages without considering risk.
- Making tests brittle by checking internal structure.
- Overusing slow end-to-end tests.

## Benefits

More tests increase confidence.

## Drawbacks

They also increase maintenance cost. The right mix gives useful coverage without making the suite brittle or slow.

## Example

Test a pricing rule with unit tests, a repository call with integration tests, and checkout with a few end-to-end checks.

## Related MAW Documents

- [Testing Strategy](../decision-trees/testing.md)
- [Bug Fix Workflow](../workflows/bug-fix.md)
- [Maintainability](maintainability.md)

# Error Handling

## Purpose

Explain how to fail clearly, recover safely, and preserve enough context to debug problems.

## Why it Matters

Poor error handling hides root causes and makes systems unpredictable. Good error handling helps users understand what went wrong and helps engineers diagnose and fix it.

## Core Concepts

- Distinguish expected failures from unexpected ones.
- Preserve context without exposing sensitive data.
- Handle errors at the right boundary.

## When to Use

- Return actionable messages to callers.
- Log enough detail for diagnosis.
- Retry only when the operation is safe to repeat.

- Fail fast on invalid input.
- Map technical errors to user-relevant outcomes.
- Keep fallback behavior explicit.

## When Not to Use

- Swallowing exceptions.
- Returning generic errors that lose context.
- Retrying operations that are not idempotent.

## Benefits

Stronger error handling adds code.

## Drawbacks

It reduces debugging time and prevents silent data loss or undefined behavior.

## Example

A failed payment should surface a clear message, preserve the provider response for logs, and avoid charging twice on retries.

## Related MAW Documents

- [Security First](security-first.md)
- [Testing](testing.md)
- [API Design](api-design.md)

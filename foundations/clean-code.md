# Clean Code

## Purpose

Explain why code should read like clear technical writing rather than a puzzle.

## Why it Matters

Code is read far more often than it is written. Clear code lowers review cost, reduces bugs from misunderstanding, and makes future changes faster.

## Core Concepts

- Names should reveal intent.
- Functions should do one meaningful thing.
- Control flow should be easy to follow.

## When to Use

- Prefer direct, descriptive names.
- Keep code close to the level of abstraction it belongs to.
- Make data flow and side effects obvious.

- Extract code when it removes cognitive load, not just lines.
- Prefer small, composable units over large hidden ones.
- Write comments for intent or rationale, not to restate the code.

## When Not to Use

- Using clever abbreviations or overly generic names.
- Hiding simple logic behind layers of indirection.
- Over-formatting code into a shape that obscures meaning.

## Benefits

Clean code can be slightly longer.

## Drawbacks

It is cheaper to maintain. The goal is not minimal text; it is minimal confusion.

## Example

`calculateInvoiceTotal` is clearer than `calc`. A short helper is better than repeating the same decision tree in several places.

## Related MAW Documents

- [Maintainability](../principles/maintainability.md)
- [Documentation](../principles/documentation.md)
- [KISS](kiss.md)

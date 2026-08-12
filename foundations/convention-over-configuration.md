# Convention Over Configuration

## Purpose

Explain why sensible defaults reduce decision fatigue and setup overhead.

## Why it Matters

When most teams make the same choice, a convention saves time and keeps projects consistent. Good conventions reduce boilerplate without removing flexibility where it matters.

## Core Concepts

- A convention is a default that the system expects.
- Configuration exists to handle meaningful exceptions.
- The value comes from reducing repeated decisions.

## When to Use

- Use conventions for common cases.
- Make exceptions possible without making them the default path.
- Document the convention clearly so teams do not guess.

- Keep the default path easy to discover.
- Make framework conventions align with real project structure.
- Override only when the default creates a real mismatch.

## When Not to Use

- Treating every setting as optional magic.
- Hard-coding a convention that does not fit the domain.
- Hiding important behavior in implicit defaults with no documentation.

## Benefits

Conventions speed up common work.

## Drawbacks

They can surprise developers when the default is too opinionated or poorly explained.

## Example

A framework that discovers files by folder name saves setup time, but a specialized deployment may still need explicit configuration.

## Related MAW Documents

- [Maintainability](../principles/maintainability.md)
- [API Design](../principles/api-design.md)
- [Documentation](../principles/documentation.md)

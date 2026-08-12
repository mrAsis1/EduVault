# Clean Architecture (Foundations Overview)

## Purpose

Give a short conceptual grounding for isolating core business policy from frameworks and infrastructure, before pointing to the full architectural pattern.

## Why it Matters

If the core of the system depends on delivery code, the system becomes harder to test, harder to replace, and harder to evolve. This principle protects the parts that matter most, independent of any one framework or layer diagram.

## Core Concepts

- Business policy should outlive technical choices.
- Dependencies should point from the outside toward the center.
- Interfaces belong at the boundary where change is likely.

## When to Use

- When deciding, at a principle level, whether a piece of logic belongs in the domain core or at the edge.
- When onboarding someone to *why* MAW favors dependency-inward thinking, before they read the full pattern.

## When Not to Use

- When you need the concrete layer structure, folder conventions, or a worked example — use [`architecture/clean-architecture.md`](../architecture/clean-architecture.md) instead, which is the authoritative document for this pattern.
- When the system is small enough that [KISS](kiss.md) and [YAGNI](yagni.md) already cover the decision.

## Benefits

Keeps the underlying rationale (protect the core, push volatility to the edge) available as a quick foundational reference, distinct from the fuller pattern write-up.

## Drawbacks

Stated at the principle level only — it intentionally does not repeat the ports/layers detail, so it cannot answer implementation-level questions on its own.

## Example

A checkout rule should live in a use case or domain service, while HTTP and database code sit outside it. For the full pattern, layer breakdown, and worked example, see [`architecture/clean-architecture.md`](../architecture/clean-architecture.md).

## Related MAW Documents

- [Architecture: Clean Architecture (authoritative)](../architecture/clean-architecture.md)
- [Hexagonal Architecture](../architecture/hexagonal.md)
- [Separation of Concerns](separation-of-concerns.md)

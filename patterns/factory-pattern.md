# Factory Pattern

## Purpose

Explain how to centralize object creation when construction varies or is nontrivial.

## Why it Matters

Factories keep creation logic out of consumers. That is useful when the object type, configuration, or construction steps depend on runtime choices.

## Core Concepts

- The factory decides what to create.
- The consumer asks for a product, not the construction steps.
- Creation rules live in one place.

## When to Use

- Use a factory when construction has meaningful branching.
- Keep the returned type stable and useful.
- Avoid factories for simple constructors with no variation.

- Hide complex setup behind the factory.
- Make the factory easy to test.
- Prefer clear names that describe the created concept.

## When Not to Use

- Wrapping every `new` call in a factory.
- Putting business behavior into creation code.
- Using factories when dependency injection already solves the need.

## Benefits

Factories simplify consumers and centralize creation.

## Drawbacks

They can become overgeneralized if used where direct construction is enough.

## Example

A notification factory can return email, SMS, or push senders based on configuration.

## Related MAW Documents

- [Strategy Pattern](strategy-pattern.md)
- [Dependency Injection](dependency-injection.md)
- [When to Create a Service](../heuristics/when-to-create-service.md)

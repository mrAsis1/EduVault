# Component Design

## Purpose

Explain how to design components that are reusable, understandable, and easy to maintain.

## Why it Matters

Components are the building blocks of a UI or modular system. Good component boundaries reduce duplication and make behavior easier to test and reuse.

## Core Concepts

- A component should have one primary responsibility.
- Props or inputs should be intentional and minimal.
- State should live as close as possible to the code that needs it.

## When to Use

- Keep components focused on one concept.
- Separate rendering from business logic when practical.
- Prefer explicit composition over hidden behavior.

- Give components names that describe what they are, not how they are built.
- Keep styling, data, and interaction boundaries readable.
- Split components when reuse or clarity improves.

## When Not to Use

- Creating generic components that accept too many props.
- Mixing unrelated responsibilities in one UI unit.
- Making a component small enough to be useless.

## Benefits

Smaller components improve reuse and testability.

## Drawbacks

Too much fragmentation makes the system harder to navigate.

## Example

A form field component can own label, input, and error presentation, while the page component owns the submission workflow.

## Related MAW Documents

- [When to Create a Component](../heuristics/when-to-create-component.md)
- [When to Use Context](../heuristics/when-to-use-context.md)
- [Accessibility](accessibility.md)

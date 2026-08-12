# When to Create a Hook

## Purpose

Explain when shared logic in a component-based UI should become a hook.

## Why it Matters

Hooks can pull repeated stateful logic out of components and make behavior easier to test and reuse. Misused hooks can hide side effects and make control flow harder to follow.

## Core Concepts

- Use a hook for reusable stateful behavior.
- Keep UI rendering separate from reusable logic.
- Hooks should expose a small, clear API.

## When to Use

- Create a hook when multiple components need the same behavior.
- Keep the hook focused on one concern.
- Use a hook to coordinate logic, not to create a new abstraction layer for its own sake.

- Name hooks after the behavior they provide.
- Keep side effects explicit and predictable.
- Return only what consumers actually need.

## When Not to Use

- Moving component-specific logic into a hook too early.
- Packing unrelated behaviors into one hook.
- Using hooks to hide state that should stay local.

## Benefits

Hooks improve reuse and separation.

## Drawbacks

They can obscure logic if they become too broad or too magical.

## Example

Create a hook for debounced search state shared by several screens. Keep a one-off toggle local to the component that owns it.

## Related MAW Documents

- [When to Create a Component](when-to-create-component.md)
- [State Management](../decision-trees/state-management.md)
- [Component Design](../principles/component-design.md)

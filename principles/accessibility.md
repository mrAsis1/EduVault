# Accessibility

## Purpose

Explain how to build software that more people can use effectively.

## Why it Matters

Accessible software works better for keyboard users, screen reader users, low-vision users, and anyone dealing with imperfect devices or environments. Accessibility is a quality requirement, not an optional polish step.

## Core Concepts

- Use semantic structure first.
- Keep interaction reachable by keyboard.
- Expose state and errors clearly to assistive technology.

## When to Use

- Write meaningful labels, headings, and landmarks.
- Preserve focus order and visible focus state.
- Do not rely on color alone to convey meaning.

- Test with keyboard-only navigation.
- Use alt text and accessible names where needed.
- Prefer native controls when they already solve the interaction.

## When Not to Use

- Building custom controls without accessibility support.
- Hiding important information behind hover only interactions.
- Treating accessibility as a final pass instead of a design constraint.

## Benefits

Accessible designs may require more structure and care.

## Drawbacks

That effort pays back in usability, reach, and lower support cost.

## Example

A button should be a real button, not a clickable div. A form error should be announced and associated with the field it affects.

## Related MAW Documents

- [Component Design](component-design.md)
- [Testing](testing.md)
- [Frontend Framework](../decision-trees/frontend-framework.md)

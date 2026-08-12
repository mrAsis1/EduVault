# When to Create a Component

## Purpose

Explain when a piece of UI should become its own component.

## Why it Matters

Good components reduce repetition, clarify ownership, and make UI easier to test. Too many small components can do the opposite by scattering simple markup across the project.

## Core Concepts

- A component should own one visible responsibility.
- Reuse and clarity are better reasons than line count.
- Boundaries should match how the UI changes.

## When to Use

- Create a component when a UI block has a distinct purpose.
- Extract when the same UI appears in multiple places.
- Keep props small and meaningful.

- Make the component easy to understand from its public API.
- Avoid components that only forward props.
- Split only when the new unit improves readability or reuse.

## When Not to Use

- Turning every wrapper into a component.
- Creating components before the design stabilizes.
- Using components to hide unrelated behavior.

## Benefits

More components can improve reuse and testing.

## Drawbacks

They also increase indirection and navigation cost.

## Example

Create a card component for a repeated product summary. Keep a one-off label span inline if it does not carry its own responsibility.

## Related MAW Documents

- [Component Design](../principles/component-design.md)
- [When to Split Files](when-to-split-files.md)
- [Feature Folder](../patterns/feature-folder.md)

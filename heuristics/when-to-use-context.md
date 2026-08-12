# When to Use Context

## Purpose

Explain when shared UI state belongs in context instead of props or a global store.

## Why it Matters

Context is useful for values that many descendants need and that change relatively infrequently. Used well, it removes prop drilling without creating a full global state system.

## Core Concepts

- Context is for shared, read-mostly values.
- It works best when ownership is clear.
- Frequent updates can cause broad re-renders.

## When to Use

- Use context for theme, locale, auth session, or similar app-wide values.
- Avoid context for rapidly changing UI state.
- Keep the provided value small and meaningful.

- Wrap context in a focused provider.
- Keep update frequency low when possible.
- Split different concerns into different contexts.

## When Not to Use

- Using context as a general-purpose store.
- Putting everything in one provider.
- Ignoring render cost when the context value changes often.

## Benefits

Context reduces prop drilling and improves access.

## Drawbacks

It can hide dependencies and trigger re-renders across wide parts of the tree.

## Example

Use context for the current user or theme. Keep a modal's open state local to the component that owns the modal.

## Related MAW Documents

- [State Management](../decision-trees/state-management.md)
- [When to Use Global State](when-to-use-global-state.md)
- [Component Design](../principles/component-design.md)

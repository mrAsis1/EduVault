# When to Use Global State

## Purpose

Explain when state should be shared across the whole application instead of kept local or in context.

## Why it Matters

Global state makes cross-cutting data easy to reach, but it also makes coupling wider. Use it only when the sharing benefit clearly outweighs the coordination cost.

## Core Concepts

- Global state is for data used by many unrelated parts of the app.
- Ownership and update rules must be explicit.
- Not every shared value needs to be global.

## When to Use

- Use global state for truly app-wide concerns.
- Keep ephemeral UI details local.
- Separate server state from client state when possible.

- Limit what the global store holds.
- Keep selectors and updates predictable.
- Document who owns the data and who may change it.

## When Not to Use

- Putting every piece of state into a store.
- Using global state because props feel inconvenient.
- Storing derived data that can be computed from source state.

## Benefits

Global state simplifies access.

## Drawbacks

It increases coupling, test surface, and the risk of accidental broad reactivity.

## Example

Use global state for authenticated user data or cross-app notifications. Keep form input state local to the form.

## Related MAW Documents

- [State Management](../decision-trees/state-management.md)
- [When to Use Context](when-to-use-context.md)
- [Maintainability](../principles/maintainability.md)

# State Management

## Purpose

Help choose the right scope for state in an application.

## Why it Matters

State is easiest to maintain when it lives at the smallest useful scope. Moving it too high creates noise; leaving it too low creates duplication.

## Core Concepts

- Local state belongs to one component or unit.
- Shared state belongs to the smallest common owner.
- Global state is for data that many parts of the app truly depend on.

## When to Use

- Start local, then lift only when sharing is real.
- Use context for low-frequency shared values.
- Use an external store when many consumers or update patterns require it.

- Separate server state from UI state when their lifecycles differ.
- Keep derived state derived instead of copied.
- Make ownership obvious.

## When Not to Use

- Putting every value in a global store.
- Using context for rapidly changing values that trigger broad re-renders.
- Duplicating state that can be derived from source data.

## Benefits

Local state is simplest. Shared and global state reduce prop drilling.

## Drawbacks

They increase coupling and the cost of change.

## Example

Form field values usually stay local. User authentication state may live globally. Theme selection often fits context.

## Related MAW Documents

- [When to Use Context](../heuristics/when-to-use-context.md)
- [When to Use Global State](../heuristics/when-to-use-global-state.md)
- [Component Design](../principles/component-design.md)

# React: Architecture

General architectural reasoning (one responsibility per file, depend on
abstractions at boundaries, business logic separate from framework
code) lives in [`docs/architecture.md`](../../docs/architecture.md) and
[`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md).
This file covers what that looks like specifically in React.

## Component boundaries

A React component should own rendering and local interaction, not
business rules. If a component needs a discount calculation, an API
call shaped for a specific screen, or validation logic, that logic
belongs in a hook or a plain function it calls — not inline in JSX.
This is the React-specific instance of
[`foundations/separation-of-concerns.md`](../../foundations/separation-of-concerns.md).

## Where state-driven logic lives

- **Local, single-component state** → `useState`/`useReducer` inside
  the component.
- **Logic reused across components** → a custom hook. See
  [`heuristics/when-to-create-hook.md`](../../heuristics/when-to-create-hook.md)
  for the general rule; in React specifically, extract when the same
  `useEffect`/`useState` combination appears in more than one component.
- **App-wide, low-frequency values** (auth session, theme) → Context.
  See [`heuristics/when-to-use-context.md`](../../heuristics/when-to-use-context.md).
- **App-wide, high-frequency or complex state** → an external store.
  See [`heuristics/when-to-use-global-state.md`](../../heuristics/when-to-use-global-state.md).

## Data fetching sits outside the component tree

Fetching logic (the actual `fetch`/client call) should sit behind a
hook or service function, not inline in a component body, so it can be
mocked in tests per
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md).
This mirrors "depend on abstractions at boundaries" from
[`docs/architecture.md`](../../docs/architecture.md) — the component
depends on `useUserProfile()`, not on `axios` or `fetch` directly.

## Composition over prop-drilling or inheritance

React has no class inheritance model to misuse, but the equivalent
mistake is a large component holding too many concerns and passing
props down through several layers to reach a distant child. Prefer
composition: pass the child component itself as a prop or `children`,
rather than threading data through intermediate components that don't
use it. See [`foundations/composition-over-inheritance.md`](../../foundations/composition-over-inheritance.md).

## Related

- [`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)
- [`architecture/layered.md`](../../architecture/layered.md)
- [`principles/component-design.md`](../../principles/component-design.md)
- [`decision-trees/state-management.md`](../../decision-trees/state-management.md)

# Module: React

This module applies MAW's general conventions concretely to React. It
does not restate rules that already live elsewhere — it links to them
and adds only what's specific to building with React.

Enforceable, file-type-scoped rules for React (functional components,
hooks, composition, accessibility) live in
[`.github/instructions/react.instructions.md`](../../.github/instructions/react.instructions.md)
and apply automatically to every `.tsx` file. This module explains the
reasoning and stack-specific detail behind those rules.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Where React fits in a layered/component architecture, component boundaries |
| [`project-structure.md`](project-structure.md) | Concrete folder layout for a React project |
| [`best-practices.md`](best-practices.md) | React-specific do's, tied to `react.instructions.md` |
| [`common-mistakes.md`](common-mistakes.md) | Recurring React failure patterns |
| [`performance.md`](performance.md) | React-specific performance techniques |
| [`security.md`](security.md) | React-specific security risks |
| [`testing.md`](testing.md) | React-specific testing patterns |
| [`examples.md`](examples.md) | Worked examples at MAW's quality bar |

## Relationship to other layers

- General architecture reasoning: [`docs/architecture.md`](../../docs/architecture.md)
- Component design principle: [`principles/component-design.md`](../../principles/component-design.md)
- When to create a component/hook:
  [`heuristics/when-to-create-component.md`](../../heuristics/when-to-create-component.md),
  [`heuristics/when-to-create-hook.md`](../../heuristics/when-to-create-hook.md)
- Framework choice reasoning: [`decision-trees/frontend-framework.md`](../../decision-trees/frontend-framework.md)
- Worked component example: [`examples/good-component-example.md`](../../examples/good-component-example.md)

If a rule isn't specific to React, it belongs in one of the files above,
not here.

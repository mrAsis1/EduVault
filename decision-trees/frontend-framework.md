# Frontend Framework

## Purpose

Help choose a frontend framework or rendering approach that fits the product, team, and interaction model.

## Why it Matters

The framework shapes developer velocity, rendering strategy, and how much of the app can be shared or tested outside the browser.

## Core Concepts

- Component-based frameworks fit interactive UIs.
- Server-rendered or hybrid approaches fit content-heavy sites.
- Ecosystem, routing, and data loading matter as much as UI syntax.

## When to Use

- Choose based on the app shape, not popularity.
- Prefer frameworks that match the team's delivery model.
- Consider SSR, hydration, and routing requirements early.

- Evaluate accessibility and testing support with the framework.
- Check how it handles state, forms, and async data.
- Keep framework-specific code at the edges when possible.

## When Not to Use

- Choosing a framework before understanding rendering needs.
- Over-indexing on benchmark claims.
- Ignoring long-term maintenance of plugins and conventions.

## Benefits

Heavier frameworks offer more built-in structure. Lighter frameworks can be easier to adopt.

## Drawbacks

May require more custom assembly.

## Example

Use a component-heavy framework for a dashboard with complex interactions. Use a hybrid or server-first approach for a content site with some dynamic areas.

## Related MAW Documents

- [Component Design](../principles/component-design.md)
- [State Management](state-management.md)
- [Accessibility](../principles/accessibility.md)

# MVC

## Purpose

Explain the Model-View-Controller pattern as a way to separate input handling, state, and presentation.

## Why it Matters

MVC is a familiar structure for server-rendered applications and many classic UI systems. It keeps request handling from becoming tangled with rendering and business rules.

## Core Concepts

- Model holds the application data and rules.
- View renders output for the user.
- Controller handles input and coordinates the other parts.

## When to Use

- Keep controllers thin.
- Put business logic in the model or application service, not in the view.
- Let views present data, not decide it.

- Return view models or DTOs that are shaped for rendering.
- Keep the controller responsible for orchestration, not computation.
- Use MVC only where its mental model fits the app.

## When Not to Use

- Building fat controllers that own workflow and rules.
- Letting views query the database directly.
- Treating model, entity, and database row as the same thing.

## Benefits

MVC is easy to understand.

## Drawbacks

The pattern can blur responsibilities when an application grows. It works best when the interaction model is straightforward and rendering is central.

## Example

A blog controller can load a post through a model or service, pass it to a view, and return the rendered page.

## Related MAW Documents

- [MVVM](mvvm.md)
- [Component Design](../principles/component-design.md)
- [Separation of Concerns](../foundations/separation-of-concerns.md)

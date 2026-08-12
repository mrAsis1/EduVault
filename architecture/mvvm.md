# MVVM

## Purpose

Describe the Model-View-ViewModel pattern as a way to separate presentation state from the visual layer.

## Why it Matters

MVVM keeps UI logic testable and reduces the amount of behavior embedded directly in templates or views. It is useful when the interface has enough interaction to justify an intermediate state model.

## Core Concepts

- Model represents the underlying data and rules.
- View renders the interface.
- ViewModel exposes view-ready state and commands.

## When to Use

- Keep the ViewModel focused on presentation logic.
- Let the View bind to state, not own it.
- Keep domain decisions out of the ViewModel when possible.

- Use ViewModels to simplify the view, not to mirror every domain object.
- Make bindings explicit and easy to trace.
- Test ViewModel behavior separately from rendering.

## When Not to Use

- Moving all application logic into ViewModels.
- Creating a ViewModel for every tiny screen fragment.
- Letting the ViewModel become a second controller.

## Benefits

MVVM improves testability and separation.

## Drawbacks

It introduces another abstraction that only pays off when the UI has enough behavior to need it.

## Example

A form ViewModel can validate fields, expose submit state, and format messages while the view handles markup and interaction.

## Related MAW Documents

- [MVC](mvc.md)
- [Component Design](../principles/component-design.md)
- [State Management](../decision-trees/state-management.md)

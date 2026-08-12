# Maintainability

## Purpose

Explain how to keep code and design easy to change over time.

## Why it Matters

Maintainable systems cost less to extend, debug, and review. If a change requires too much context, the code will eventually slow the team down.

## Core Concepts

- Local reasoning reduces change cost.
- Clear boundaries limit blast radius.
- Tests and documentation support future changes.

## When to Use

- Keep responsibilities narrow.
- Prefer explicit over clever code.
- Make the common change path easy.

- Review code for future readers, not just the current task.
- Keep dependencies visible.
- Refactor when friction becomes repetitive.

## When Not to Use

- Valuing short-term convenience over long-term clarity.
- Letting coupling spread silently.
- Treating maintainability as subjective taste instead of measurable friction.

## Benefits

Maintainability may add structure and a few extra files.

## Drawbacks

It pays for itself when the system has to evolve.

## Example

A module that can be changed without touching unrelated layers is more maintainable than one with hidden side effects spread across the app.

## Related MAW Documents

- [Separation of Concerns](../foundations/separation-of-concerns.md)
- [When to Refactor](../heuristics/when-to-refactor.md)
- [Documentation](documentation.md)

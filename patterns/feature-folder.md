# Feature Folder

## Purpose

Explain how to organize code by feature so related files live together.

## Why it Matters

Feature-based structure makes it easier to find everything that changes together. It reduces cross-cutting file sprawl and matches how teams think about product work.

## Core Concepts

- A feature folder groups UI, logic, and tests for one capability.
- Technical detail comes after feature ownership.
- Shared code lives outside the feature only when it is truly generic.

## When to Use

- Group files by business capability.
- Keep a feature's public surface small.
- Extract shared primitives only after real reuse appears.

- Use feature folders at boundaries where change is frequent.
- Keep naming consistent inside the folder.
- Let the folder structure make ownership obvious.

## When Not to Use

- Copying the same helper into many feature folders.
- Mixing unrelated features because they use the same framework type.
- Creating a shared folder too early.

## Benefits

Feature folders improve locality and ownership.

## Drawbacks

They can make broad cross-feature utilities less obvious if shared code is not managed carefully.

## Example

An orders feature folder can contain its page, service, hooks, and tests together.

## Related MAW Documents

- [Modular Monolith](../architecture/modular-monolith.md)
- [When to Split Files](../heuristics/when-to-split-files.md)
- [Maintainability](../principles/maintainability.md)

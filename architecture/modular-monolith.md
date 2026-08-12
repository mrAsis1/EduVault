# Modular Monolith

## Purpose

Describe how to keep a single deployable unit while still enforcing strong internal boundaries.

## Why it Matters

A modular monolith avoids distributed-system overhead while preserving much of the clarity of service boundaries. It is often the best step before microservices, or the permanent choice when a single deployment is enough.

## Core Concepts

- Modules own a clear business area.
- Modules communicate through public interfaces, not private internals.
- One deployment package contains the whole system.

## When to Use

- Draw module boundaries around business capabilities.
- Prevent direct access to another module's internals.
- Keep shared code minimal and intentional.

- Enforce boundaries in code and in the folder structure.
- Use module-level tests to protect contracts.
- Extract services only when a real boundary exists.

## When Not to Use

- Turning the monolith into a pile of unrelated utilities.
- Using shared state as a shortcut between modules.
- Splitting into services before boundaries are stable.

## Benefits

The modular monolith keeps operational complexity low.

## Drawbacks

All modules still ship together. That makes it easier to change than microservices and less flexible than true independent deployment.

## Example

An e-commerce app can keep catalog, checkout, and support as separate modules inside one deployable system.

## Related MAW Documents

- [Microservices](microservices.md)
- [Feature Folder](../patterns/feature-folder.md)
- [Maintainability](../principles/maintainability.md)

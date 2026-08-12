# When to Split Files

## Purpose

Explain when a file has become too broad and should be divided.

## Why it Matters

Large files are harder to scan, reason about, and review. But splitting too early can scatter closely related logic and make navigation worse.

## Core Concepts

- Split by responsibility, not by line count alone.
- A file should have one main reason to change.
- The consumer should not need the whole file to understand one part.

## When to Use

- Split when the file contains unrelated concerns.
- Split when a subset can be understood and tested independently.
- Keep closely coupled code together.

- Move shared helpers to the module that owns them.
- Preserve a clear public entry point after splitting.
- Avoid breaking a file into fragments that are harder to trace.

## When Not to Use

- Splitting every large file automatically.
- Using file count as a vanity metric.
- Separating code that changes together.

## Benefits

Smaller files improve focus.

## Drawbacks

Too many of them increase navigation cost. The right split supports comprehension, not bureaucracy.

## Example

Split a file that mixes UI rendering, data fetching, and validation into separate concerns. Keep a compact utility file intact if it already has one coherent job.

## Related MAW Documents

- [Separation of Concerns](../foundations/separation-of-concerns.md)
- [Feature Folder](../patterns/feature-folder.md)
- [When to Refactor](when-to-refactor.md)

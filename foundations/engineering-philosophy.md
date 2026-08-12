# Engineering Philosophy

## Purpose

State the decision-making mindset behind MAW: reason carefully, design before building, and verify before claiming success.

## Why it Matters

Good engineering is not just code output. It is disciplined judgment about scope, trade-offs, failure modes, and change cost. That judgment is what MAW is meant to teach.

## Core Concepts

- Understand the problem before choosing a solution.
- Prefer explicit trade-offs over vague optimism.
- Keep the system easy to change, not merely easy to start.

## When to Use

- Think in terms of responsibilities and boundaries.
- Favor small, reversible changes.
- Let evidence, not habit, justify complexity.

- Ask what can fail and how it will be diagnosed.
- Prefer options that the next maintainer can understand quickly.
- Use documentation, tests, and structure as part of the solution.

## When Not to Use

- Building for imagined future scale before the current problem is clear.
- Optimizing for novelty instead of robustness.
- Treating architecture as decoration rather than decision support.

## Benefits

This philosophy can feel slower at the start.

## Drawbacks

It avoids expensive rework later. It values long-term clarity over short-term speed.

## Example

Before adding a service, ask whether a simpler module or workflow solves the real problem more cleanly.

## Related MAW Documents

- [Software Lifecycle](software-lifecycle.md)
- [Maintainability](../principles/maintainability.md)
- [YAGNI](yagni.md)

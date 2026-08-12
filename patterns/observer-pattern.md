# Observer Pattern

## Purpose

Explain how to notify multiple interested parties when an event or state change occurs.

## Why it Matters

Observer lets a producer stay decoupled from its consumers. That is useful for events, reactive updates, and publishing state changes to multiple listeners.

## Core Concepts

- The subject publishes changes.
- Observers subscribe to updates.
- Observers react without the subject knowing their details.

## When to Use

- Use observers when multiple reactions are expected.
- Keep event payloads focused.
- Make subscription and unsubscription explicit.

- Keep the event boundary stable.
- Document ordering and delivery guarantees.
- Use it for real eventing, not for hidden control flow.

## When Not to Use

- Creating hard-to-trace side effects.
- Overusing observers when a direct call is clearer.
- Forgetting to clean up subscriptions.

## Benefits

Observer improves decoupling.

## Drawbacks

It can make control flow harder to follow and debug when many listeners are involved.

## Example

A domain event can notify analytics, notifications, and auditing handlers after an order is placed.

## Related MAW Documents

- [Strategy Pattern](strategy-pattern.md)
- [Event-driven design](../docs/architecture.md)
- [Testing](../principles/testing.md)

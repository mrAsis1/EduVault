# Microservices

## Purpose

Explain when to split a system into independently deployable services and when to keep it together.

## Why it Matters

Microservices can support independent scaling and team autonomy, but they also add network calls, operational overhead, and distributed failure modes. The architecture should pay for real coordination problems, not imagined ones.

## Core Concepts

- Each service owns a bounded responsibility.
- Services communicate over explicit contracts.
- Data ownership is local to the service.

## When to Use

- Split by business capability, not by technical layer.
- Assume every synchronous call can fail or slow down.
- Keep service contracts stable and versioned.

- Start with clear boundaries and strong observability.
- Automate deployment, monitoring, and rollback before scaling the service count.
- Prefer eventual consistency where the domain allows it.

## When Not to Use

- Breaking a monolith into many services too early.
- Sharing a database across services.
- Treating network boundaries like local method calls.

## Benefits

Microservices improve team isolation and independent release cadence.

## Drawbacks

They increase complexity in testing, debugging, and operations. Use them only when the organizational or scaling benefit is real.

## Example

An order system may separate checkout, payment, and notification services when those areas have different release cycles and operational needs.

## Related MAW Documents

- [Modular Monolith](modular-monolith.md)
- [Deployment](../decision-trees/deployment.md)
- [API Design](../principles/api-design.md)

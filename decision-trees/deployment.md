# Deployment

## Purpose

Help choose a deployment model that matches scale, risk, and operational maturity.

## Why it Matters

Deployment shape affects reliability, rollback speed, and how much infrastructure the team must maintain.

## Core Concepts

- Simple hosting is often enough for small systems.
- Containers improve portability and repeatability.
- Orchestrators and serverless platforms trade control for automation.

## When to Use

- Choose the simplest deployment model that meets reliability needs.
- Add automation before adding deployment complexity.
- Design for rollback, observability, and secrets handling from the start.

- Keep build and release steps reproducible.
- Separate application config from code.
- Measure operational pain before introducing heavier infrastructure.

## When Not to Use

- Moving to orchestration before the team can run it well.
- Treating serverless as a magic cost reducer.
- Ignoring deployment and recovery testing.

## Benefits

Simple deployments are easier to operate. Heavier platforms offer scaling and resilience features.

## Drawbacks

Only pay off when the workload or team size needs them.

## Example

A small internal tool may run on a managed platform. A high-traffic multi-service system may need containers plus orchestration.

## Related MAW Documents

- [Microservices](../architecture/microservices.md)
- [Performance First](../principles/performance-first.md)
- [Security First](../principles/security-first.md)

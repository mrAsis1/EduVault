# Performance First

## Purpose

Explain how to treat performance as a design concern rather than an afterthought.

## Why it Matters

Users notice slow systems quickly. Performance-aware design reduces latency, improves throughput, and prevents expensive rework later.

## Core Concepts

- Measure before optimizing.
- Focus on user-visible bottlenecks.
- Design for the expected scale, not fantasy scale.

## When to Use

- Consider performance in architecture and data modeling.
- Avoid obvious waste in hot paths.
- Keep optimization proportional to the problem.

- Profile before changing code for speed.
- Monitor real workloads.
- Document any optimization that makes code less direct.

## When Not to Use

- Optimizing code that is not slow.
- Adding caching or batching without a measurement.
- Trading clarity for theoretical gains.

## Benefits

Performance work can improve the experience.

## Drawbacks

Unnecessary tuning makes code harder to maintain. Optimize where the cost is real.

## Example

Batch repeated database reads when they dominate response time. Keep a simple implementation when the measured cost is already low.

## Related MAW Documents

- [When to Optimize](../heuristics/when-to-optimize.md)
- [When to Cache](../heuristics/when-to-cache.md)
- [Database Design](database-design.md)

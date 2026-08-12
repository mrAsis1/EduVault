---
applyTo: "**/*"
---

Always:

- Measure before optimizing — no speculative optimization
- Prefer O(n) or better for code operating on user-scale data
- Paginate or stream large datasets instead of loading fully into memory
- Debounce/throttle high-frequency event handlers (scroll, resize, input)

Avoid:

- Premature optimization that harms readability without a measured need
- N+1 queries — batch or join instead
- Blocking the main thread with synchronous heavy computation
- Re-rendering or re-computing on every call when memoization is available and justified

Prefer:

- Lazy loading for non-critical code paths and assets
- Caching with clear invalidation over recomputation
- Native platform APIs over reimplementing them

If a change trades readability for performance, it must be justified with
a measurement (benchmark, profile) in the PR description, per
`.github/instructions/review.instructions.md`.

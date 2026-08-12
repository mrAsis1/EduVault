# Performance Verification Checklist

Traces to `.github/instructions/performance.instructions.md` (`[PERF]`).

## Measurement discipline

- [ ] No speculative optimization — a measured need exists first
      `[PERF]`
- [ ] Any readability-for-performance trade-off is justified with a
      benchmark/profile in the PR description `[PERF]`

## Algorithmic complexity

- [ ] Code operating on user-scale data is O(n) or better, or the
      exception is justified `[PERF]`
- [ ] No N+1 queries — batched or joined instead `[PERF]`

## Data handling

- [ ] Large datasets are paginated or streamed, not loaded fully into
      memory `[PERF]`

## Responsiveness

- [ ] High-frequency event handlers (scroll, resize, input) are
      debounced/throttled `[PERF]`
- [ ] No synchronous heavy computation blocking the main thread `[PERF]`

## Reuse over reimplementation

- [ ] Lazy loading used for non-critical code paths/assets where
      applicable `[PERF]`
- [ ] Caching used with clear invalidation, over recomputation, where
      applicable `[PERF]`
- [ ] Native platform APIs preferred over reimplementing them `[PERF]`
- [ ] Memoization applied where justified, not applied reflexively where
      unneeded `[PERF]`

## Related MAW Documents

- `.github/instructions/performance.instructions.md`
- `verification/performance/review-template.md`

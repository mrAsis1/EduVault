# Checklist: Performance Regression

Full reasoning: `playbooks/performance-regression.md`

- [ ] Regression confirmed with a before/after measurement, not just
      reported feeling
- [ ] Bisected to the likely introducing change before investigating
      further
- [ ] Obvious causes checked first (N+1 query, missing index, unbounded
      loop, dependency bump)
- [ ] Fix verified with the same measurement methodology that confirmed
      the regression
- [ ] Benchmark recorded in `research/benchmarks/` if a real trade-off
      was involved

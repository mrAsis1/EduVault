# Common Performance Mistakes

## Measurement discipline

**Rewriting a clear, readable function into a "faster" clever one with
no profile showing it was ever slow.** The trade loses readability for
zero measured benefit. Traces to: measure before optimizing.

**Claiming a change is "faster" based on intuition about Big-O**
without running it against realistic data volume — some "optimizations"
lose on small n due to overhead. Traces to: benchmark required for the
trade-off.

## Complexity and data access

**A loop that fetches a related record per iteration** instead of a
single batched/joined query — invisible in dev with 5 rows, catastrophic
in production with 50,000. Traces to: no N+1 queries.

**Loading an entire table into memory to filter/paginate in application
code** instead of pushing the filter/pagination to the query. Traces to:
paginate or stream large datasets.

## Responsiveness

**A scroll or resize handler doing expensive work on every event**
without debounce/throttle, causing visible jank that only shows up under
real usage, not a quick manual test. Traces to: debounce/throttle
high-frequency handlers.

**A large synchronous computation (parsing, sorting, transforming) run
directly on the main thread** because it "usually" finishes fast, then
blocks the UI on larger inputs. Traces to: no blocking the main thread.

## Reuse

**Adding memoization to something that doesn't need it**, adding
complexity and a stale-cache risk for a computation that was already
cheap. Traces to: memoization applied only when justified, not
reflexively.

## Related MAW Documents

- `verification/performance/checklist.md`
- `.github/instructions/performance.instructions.md`

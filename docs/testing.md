# Testing

## Why tests are required in the same PR as the code

A feature without a test is a claim without evidence. Deferred tests get
deprioritized once the feature works, and by the time a bug surfaces,
nobody remembers the edge cases that were considered during
implementation. Writing the test alongside the code captures that
knowledge while it's still in the author's head.

## The testing pyramid, applied here

- **Unit tests** — the majority. Fast, isolated, test one function/module
  at a time. Mock external dependencies.
- **Integration tests** — fewer. Test that modules work together
  correctly at real boundaries (API layer, database layer).
- **End-to-end tests** — fewest. Test critical user flows only. Slow and
  brittle by nature, so reserved for what actually matters if broken
  (login, checkout, data loss scenarios).

Inverting this pyramid (heavy e2e, light unit) makes the suite slow and
flaky. That's why `.github/instructions/testing.instructions.md` pushes
coverage toward unit tests by default.

## Why implementation details aren't tested

A test that asserts on private internal state breaks every time the
internals are refactored, even when behavior is unchanged. That trains
people to see failing tests as noise instead of signal. Testing through
the public interface means tests only fail when actual behavior changes —
which is the only time a test should fail.

## Why every new bug gets a regression test

A bug that reoccurs after being fixed once means the fix addressed the
symptom, not the cause, or nothing prevents it from being reintroduced.
A regression test turns "we fixed this" into "this cannot silently
happen again."

## Coverage as a signal, not a target

Coverage percentage tells you what's *executed* by tests, not what's
*verified*. A high number with weak assertions is worse than a lower
number with strong ones — it creates false confidence. Use coverage to
find untested paths, not as a pass/fail gate on its own.

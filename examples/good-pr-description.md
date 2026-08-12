# Example: Good PR Description

This is a worked example of a PR description that gives a reviewer
everything `workflows/code-review.md` asks them to check, up front. Not
every PR needs every section — but every section here has a reason to
exist, tied back to the review checklist.

---

## Title

`fix(auth): stop reset-password endpoint from exceeding rate limit under concurrent requests`

## Summary

Fixes a race condition where two reset-password requests arriving within
the same millisecond could both pass the rate-limit check before either
incremented the counter, allowing more than 3 requests/hour per account
under concurrent load.

## Root Cause

The rate limiter did a read-then-write (`GET count`, check, `INCR`) as
two separate Redis calls. Under concurrent requests, both could read the
same count before either incremented it — a classic check-then-act race.

## Fix

Replaced the two-call check with a single atomic `INCR` + `EXPIRE`
(Redis `INCR` returns the post-increment value directly, so the check
happens on the same atomic operation that mutates state).

## Regression Test

Added `rate-limiter.race.test.ts`, which fires 5 concurrent requests for
the same account and asserts exactly 3 succeed and 2 are rejected with
`429`. This test fails against the old implementation (flakily passes
some of the time, which is itself the bug) and passes deterministically
against the fix.

## Files Changed

- `src/middleware/rate-limit.ts` — atomic increment
- `src/middleware/rate-limit.race.test.ts` — new regression test

## Scope

This PR is fix-only. It does not touch the rate limit thresholds
(3/hour, 10/hour) or the reset-password controller — those are
unrelated to this bug, per `.github/instructions/git.instructions.md`
scoping rules.

## How to verify locally

```
npm test -- rate-limit.race.test.ts
```
Run 5-10 times before the fix to observe flakiness; deterministic after.

---

## Why this is a good example

- Root cause is stated explicitly and separately from the fix, per
  `workflows/bug-fix.md` — a reviewer can evaluate whether the diagnosis
  is correct before even reading the fix.
- The regression test description explains *why* it's a valid regression
  test (fails before, passes after — deterministically), not just that
  one exists.
- "Scope" section proactively heads off the most common review pushback
  (bundled unrelated changes) before a reviewer has to ask.
- Includes a manual verification step, which respects a reviewer's time
  and doesn't assume they'll trust the description blindly.

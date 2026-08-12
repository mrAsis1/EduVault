# Common Testing Mistakes

## Structure

**A single test asserting three different behaviors** because they're
"related," so a failure doesn't tell you which behavior broke without
reading the assertions. Traces to: one behavior per test.

**A test name like `test1` or `handles input`** that gives no signal
about what failed when it fails, forcing a read of the test body every
time. Traces to: `should <behavior> when <condition>` naming.

## Coverage

**Testing only the happy path** because it's the scenario that was
manually verified during development, leaving edge/error cases
unverified until a user hits them. Traces to: edge and error cases
covered.

**Fixing a bug without adding a test for it** because the fix "obviously"
works — the same class of bug then reappears after an unrelated
refactor. Traces to: regression test for every bug fix.

## Independence

**Tests that pass individually but fail when run together**, because one
test mutates shared state (a shared object, a shared file, a shared
database row) that the next test depends on implicitly. Traces to: no
shared mutable state between tests.

**A shared `beforeEach` that sets up ten things when a given test only
needs two**, hiding what that specific test actually depends on. Traces
to: no shared setup that hides dependencies.

## What's over-tested

**Asserting on a component's internal state** instead of its rendered
output/behavior, so the test breaks on every internal refactor even when
user-facing behavior is unchanged. Traces to: no testing implementation
details.

**A snapshot test on a component with real logic branches** — it passes
by matching whatever was last generated, not by verifying correctness,
and gets blindly updated when it fails. Traces to: no snapshot tests for
logic-heavy code.

## Related MAW Documents

- `verification/testing/checklist.md`
- `.github/instructions/testing.instructions.md`

# Testing Verification Checklist

Traces to `.github/instructions/testing.instructions.md` (`[TEST-instr]`)
and `docs/testing.md` (`[TEST-doc]`).

## Test structure

- [ ] Each test covers one behavior `[TEST-instr]`
- [ ] Test names follow `should <expected behavior> when <condition>`
      `[TEST-instr]`
- [ ] Arrange / Act / Assert structure used `[TEST-instr]`
- [ ] No conditional logic inside tests `[TEST-instr]`

## Coverage of cases

- [ ] Happy path covered `[TEST-instr]`
- [ ] Edge cases covered `[TEST-instr]`
- [ ] Error cases covered `[TEST-instr]`
- [ ] New code has new tests in the same PR `[TEST-instr]`
- [ ] Any new bug fix includes a regression test `[TEST-doc]`

## Independence and mocking

- [ ] Tests are independent — no shared mutable state between tests
      `[TEST-instr]`
- [ ] External dependencies (network, filesystem, time) are mocked
      `[TEST-instr]`
- [ ] No shared setup that hides what a test actually depends on
      `[TEST-instr]`

## What's not tested

- [ ] No assertions on implementation details/internal state/private
      methods `[TEST-instr]`
- [ ] No snapshot tests used for logic-heavy code `[TEST-instr]`

## Pyramid shape

- [ ] Unit tests are the majority `[TEST-doc]`
- [ ] Integration tests cover real boundaries (API layer, database
      layer), not every unit interaction `[TEST-doc]`
- [ ] E2E tests are reserved for critical flows only (login, checkout,
      data loss scenarios) `[TEST-doc]`

## Coverage as signal

- [ ] Coverage number is used to find untested paths, not treated as a
      pass/fail gate on its own `[TEST-doc]`

## Related MAW Documents

- `.github/instructions/testing.instructions.md`
- `docs/testing.md`
- `verification/testing/review-template.md`

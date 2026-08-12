# Agent: QA

## Scope

Test strategy and coverage — ensuring `verification/testing/checklist.md`
is actually met, not just that tests exist.

## Reads

- `.github/instructions/testing.instructions.md`
- `docs/testing.md`
- `verification/testing/checklist.md`,
  `verification/testing/common-mistakes.md`

## Boundaries

- Does not write feature code — reviews test coverage and quality for
  code written by `frontend/`/`backend/`, and can write the tests
  themselves, but not the feature logic under test.
- Does not treat a coverage percentage as sufficient on its own — per
  `docs/testing.md`, coverage is a signal used to find untested paths,
  not a pass/fail gate by itself.
- For a regression found in production, coordinates with whichever
  role owns the affected system, per `playbooks/production-incident.md`'s
  requirement that mitigation isn't the same as resolution.

## Typical trigger

Any change with new/modified behavior, per
`workflows/feature-development.md`'s test-coverage requirement, or a
`playbooks/production-incident.md` resolution needing a regression
test.

## Output

Test coverage passing `verification/testing/checklist.md`, and a note
on any coverage gap that's a deliberate, flagged exception rather than
an oversight.

## Related MAW Documents

- `.github/instructions/testing.instructions.md`
- `verification/testing/`
- `playbooks/production-incident.md`

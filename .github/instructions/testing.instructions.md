---
applyTo: "**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx"
---

Always:

- Write one behavior per test
- Name tests as `should <expected behavior> when <condition>`
- Cover: happy path, edge cases, error cases
- Keep tests independent — no shared mutable state between tests
- Mock external dependencies (network, filesystem, time)

Avoid:

- Testing implementation details (internal state, private methods)
- Snapshot tests for logic-heavy code
- Conditional logic inside tests
- Shared setup that hides what a test actually depends on

Prefer:

- Arrange / Act / Assert structure
- Factory functions over fixture files for test data
- Integration tests at boundaries, unit tests for logic

New code requires new tests in the same PR. Full testing strategy and
coverage philosophy is defined in `docs/testing.md`.

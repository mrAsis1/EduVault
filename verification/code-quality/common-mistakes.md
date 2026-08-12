# Common Code Quality Mistakes

## Naming

**Using `UPPER_CASE` for any `const` that isn't reassigned**, rather than
reserving it for true constants. A `const` computed once inside a
function is not the same as a module-level config value. Traces to:
constants reserved for true constants.

**A component file default-exporting a `camelCase`-named function**
instead of `PascalCase`, usually because it started as a plain helper and
grew into a component. Traces to: components use PascalCase.

## Review

**Approving with an unresolved blocking comment** because the rest of the
PR looked fine. Traces to: no approving with unresolved blocking issues.

**Feedback that says "this is wrong" without saying why or what to do
instead.** Costs the author a round-trip to ask what was meant. Traces
to: feedback explains why, ties to a line.

**Scope creep inside a PR** — a "quick fix" for an unrelated bug bundled
into a feature PR, making the diff harder to review and revert
independently. Traces to: diff scope matches stated intent.

## Related MAW Documents

- `verification/code-quality/checklist.md`
- `.github/instructions/review.instructions.md`

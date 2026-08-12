# Code Quality Verification Checklist

Traces to `docs/coding-standards.md` (`[STD]`) and
`.github/instructions/review.instructions.md` (`[REV]`).

## Naming

- [ ] Variables and function names use `camelCase` `[STD]`
- [ ] Components use `PascalCase` `[STD]`
- [ ] True constants (config values, enum-like sets) use `UPPER_CASE` —
      not applied to `const` locals that just happen not to be
      reassigned `[STD]`
- [ ] Folders use `kebab-case` `[STD]`

## Review bar

- [ ] Code does what it claims, including edge cases `[REV]`
- [ ] A new team member could follow it without extra context `[REV]`
- [ ] Follows this repo's `.github/instructions/` files `[REV]`
- [ ] New behaviors and edge cases have tests `[REV]`
- [ ] Doesn't violate `security.instructions.md` `[REV]`
- [ ] Diff scope matches the stated intent — nothing extra bundled in
      `[REV]`

## Feedback quality (for the reviewer, not the author)

- [ ] Feedback is specific and tied to a line/block `[REV]`
- [ ] Blocking issues are distinguished from suggestions `[REV]`
- [ ] Feedback explains *why*, not just *that* something is an issue
      `[REV]`
- [ ] No pure stylistic nitpicks already covered by linting `[REV]`

## Related MAW Documents

- `docs/coding-standards.md`
- `.github/instructions/review.instructions.md`
- `verification/code-quality/review-template.md`

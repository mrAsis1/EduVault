# Design Verification Checklist

Tooling (formatter/linter) is assumed to have already passed. This
checklist covers only what `docs/style-guide.md` (`[STYLE]`) says tooling
can't catch. Do not add automatable items here — fix the linter config
instead (see `docs/style-guide.md`).

## Imports

- [ ] Imports are grouped: external packages, then internal absolute
      imports, then relative imports `[STYLE]`
- [ ] No unused imports remain `[STYLE]`
- [ ] No deep relative paths (`../../../..`) where a path alias exists
      `[STYLE]`

## Comments

- [ ] Comments explain *why*, not *what* `[STYLE]`
- [ ] No commented-out code left in place `[STYLE]`
- [ ] Any function needing a comment to explain *what* it does is
      flagged as a rename/decomposition candidate instead `[STYLE]`

## File and function shape

- [ ] The file can be summarized in one sentence; if not, flagged as a
      split candidate `[STYLE]`
- [ ] Files well past ~300 lines are checked for a natural split
      `[STYLE]`
- [ ] No more than one level of nested callbacks — extracted to a named
      function instead `[STYLE]`
- [ ] Early returns used over deeply nested conditionals `[STYLE]`

## Related MAW Documents

- `docs/style-guide.md`
- `verification/design/review-template.md`

# Architecture Verification Checklist

Traces to `.github/instructions/architecture.instructions.md` (`[ARCH]`).

## Responsibility

- [ ] Each file/module has one responsibility `[ARCH]`
- [ ] No god objects/files handling unrelated responsibilities `[ARCH]`

## Boundaries and dependencies

- [ ] Boundaries (API clients, storage, external services) depend on
      abstractions, not concrete implementations `[ARCH]`
- [ ] No circular dependencies between modules `[ARCH]`
- [ ] No layer reaches across another (e.g. UI code calling a database
      directly) `[ARCH]`
- [ ] Dependencies are explicit (constructor/param injection), not hidden
      globals `[ARCH]`

## Business logic separation

- [ ] Business logic is separate from framework/UI code `[ARCH]`

## Pattern consistency

- [ ] No new pattern introduced where an existing one in the codebase
      already fits `[ARCH]`
- [ ] Composition preferred over inheritance `[ARCH]`
- [ ] Modules stay small and focused rather than large/multi-purpose
      `[ARCH]`
- [ ] Data flow is explicit rather than relying on implicit shared state
      `[ARCH]`

## Process

- [ ] Any change altering folder structure, module boundaries, or
      introducing a new architectural pattern was justified against
      `docs/architecture.md` and planned via
      `.github/prompts/plan-feature.md` before implementation `[ARCH]`

## Related MAW Documents

- `.github/instructions/architecture.instructions.md`
- `docs/architecture.md`
- `verification/architecture/review-template.md`

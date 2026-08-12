---
applyTo: "**/*"
---

Always:

- Keep one responsibility per file/module
- Depend on abstractions at boundaries (API clients, storage, external services)
- Keep business logic separate from framework/UI code
- Make dependencies explicit (constructor/param injection) over hidden globals

Avoid:

- Circular dependencies between modules
- God objects/files that grow to handle unrelated responsibilities
- Reaching across layers (e.g. UI code calling a database directly)
- Introducing a new pattern when an existing one in the codebase already fits

Prefer:

- Composition over inheritance
- Small, focused modules over large multi-purpose ones
- Explicit data flow over implicit shared state

Any change that alters folder structure, module boundaries, or introduces
a new architectural pattern must be justified against `docs/architecture.md`
before implementation — use `.github/prompts/plan-feature.md` first.

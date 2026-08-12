---
applyTo: "**/*.ts,**/*.tsx"
---

Always use:

- Strict mode (`strict: true` in tsconfig)
- Explicit return types on exported functions
- `interface` for object shapes, `type` for unions/intersections
- `unknown` over `any`
- Discriminated unions for state/result modeling

Avoid:

- `any`
- Non-null assertions (`!`) outside of tests
- Enums (prefer `as const` unions)
- Implicit `any` on function parameters
- Type assertions (`as`) as a substitute for proper typing

Prefer:

- Type inference where it's obvious; explicit types where it isn't
- Narrow, composable types over large shared ones
- Utility types (`Pick`, `Omit`, `Partial`) over redefining shapes
- Result/error types over throwing for expected failure paths

Naming and structural conventions are defined in `docs/coding-standards.md`.
This file governs only what is mechanically enforceable per file.

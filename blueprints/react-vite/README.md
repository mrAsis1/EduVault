# Blueprint: React + Vite

SPA with no backend — static frontend only.

## Stack

React + TypeScript + Vite. Governed by `modules/react/`,
`modules/vite/`, `modules/typescript/`.

## Structure

```
src/
  features/
    <feature-name>/
      components/
      hooks/
      api/
      types.ts
      index.ts
  components/          — shared, cross-feature components only
  main.tsx
vite.config.ts          — project root, per modules/vite/project-structure.md
tsconfig.json
.env                     — VITE_-prefixed vars only exposed to client
.env.local               — gitignored
```

Feature-folder layout per `patterns/feature-folder.md`; the concrete
React shape is in `modules/react/project-structure.md`.

## Key config

```json
// tsconfig.json — strict mode required per
// .github/instructions/typescript.instructions.md
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "skipLibCheck": true
  }
}
```

## Applies from elsewhere in MAW

- `.github/instructions/react.instructions.md`
- `.github/instructions/typescript.instructions.md`
- `.github/instructions/accessibility.instructions.md`
- `verification/design/`, `verification/code-quality/` (this stack has
  no backend, so `verification/security/` items about data access
  don't apply beyond client-side input handling)

## Related MAW Documents

- `modules/react/`, `modules/vite/`, `modules/typescript/`
- `snippets/react/`, `snippets/typescript/`

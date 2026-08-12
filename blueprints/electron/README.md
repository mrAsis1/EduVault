# Blueprint: Electron

## Gap flagged, not silently filled

Unlike the other four blueprints, there is no `modules/electron/` in
MAW's v0.3 technology library — v0.3 covers docker, express, graphql,
nextjs, node, postgres, prisma, react, redis, supabase, tailwind,
typescript, vite, but not Electron. Writing a full blueprint here would
mean inventing Electron-specific architecture, security, and
common-mistakes guidance with nothing in MAW to trace it back to —
the same ADR-0002 problem flagged for `accessibility` in v0.5 and
`runbooks/` in v0.7: a checklist or blueprint needs a real source to
link to, not fabricated authority.

## What this means

This blueprint is intentionally minimal until `modules/electron/` is
added as a proper technology-library entry (the natural place for it,
per v0.3's structure: architecture, project-structure, best-practices,
common-mistakes, performance, security, testing, examples). At that
point this blueprint should be filled out the same way the other four
are — structure, key config, and links to that module.

## What can be said now, generically

- Electron apps combine a Node-privileged main process with one or more
  Chromium-rendered renderer processes; anything in the renderer should
  be treated with the same input-handling caution as
  `.github/instructions/security.instructions.md` requires for web
  input, since renderer code is still web code.
- `.github/instructions/typescript.instructions.md` and
  `.github/instructions/react.instructions.md` apply directly if the
  renderer uses React, per `blueprints/react-vite/`.

## Related MAW Documents

- `blueprints/react-vite/` (renderer process, if React-based)
- `.github/instructions/security.instructions.md`

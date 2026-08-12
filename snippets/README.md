# Snippets

## Purpose

Small, ready-to-use code building blocks — copy in, adapt, move on.
Each snippet is real, working code that already complies with the
relevant `.github/instructions/` files, not illustrative pseudocode.

## Why this is a separate layer

`modules/` (v0.3) documents *how* to use a technology correctly —
conventions, gotchas, setup. Snippets are the smallest unit of *reusable
implementation* built on top of that — something you paste and adapt
rather than write from scratch each time. `examples/` (v0.1) shows one
worked example per artifact type for quality calibration; snippets are
narrower and meant for direct reuse, not calibration.

## What lives here

- `react/` — component and hook snippets.
- `typescript/` — utility types and type-safety patterns.
- `supabase/` — client setup and query patterns.
- `node/` — server-side utility patterns.
- `sql/` — schema and query snippets.
- `utilities/` — cross-cutting helpers not tied to one stack piece.

## Format

One file per snippet: `[short-name-in-kebab-case].md`, containing a
one-line purpose statement, the code block, and which
`.github/instructions/` file(s) it complies with. No filler prose.

## Related MAW Documents

- `modules/`
- `.github/instructions/`
- `blueprints/` (snippets compose into blueprints)

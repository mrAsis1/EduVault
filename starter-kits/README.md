# Starter Kits

## Purpose

The instantiated version of a `blueprints/` entry — a specific,
runnable project scaffold with the project-specific decisions a
blueprint deliberately leaves open (package manager, CI provider,
hosting target, exact dependency versions) actually made.

## Why this is scaffolded as a process, not pre-generated projects

A pre-generated starter kit goes stale the moment dependency versions
move on, and different real projects reasonably want different
answers to the open decisions (npm vs pnpm, GitHub Actions vs another
CI, Vercel vs another host). Rather than freeze one set of those
choices into a kit that silently rots, this directory holds the
process for generating a current one from a blueprint on demand.

## How a starter kit gets created

1. Pick the closest `blueprints/` entry.
2. Fill in the project-specific decisions the blueprint leaves open.
3. Scaffold the actual files (config, folder structure, first
   commit) following the blueprint's structure and the relevant
   `modules/` for current best practice and current dependency
   versions at the time of creation.
4. If this combination of decisions gets reused often enough across
   real projects, it's a signal to add a named entry here
   (`starter-kits/[name]/`) capturing that specific, reusable
   combination — at that point, treat it like any other MAW content:
   real and specific, not speculative.

## Current state

No named starter kits exist yet — none of the open decisions above
have repeated often enough across real projects to justify freezing a
combination. This is the correct state until that happens; see
`knowledge/README.md`'s content policy for why fabricated ones aren't
added preemptively.

## Related MAW Documents

- `blueprints/`
- `modules/`
- `knowledge/README.md` (same content policy: real, not speculative)

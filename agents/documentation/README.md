# Agent: Documentation

## Scope

Docs currency and structure — ensuring changes to code come with the
required doc updates, and that those updates follow
`.github/instructions/documentation.instructions.md` (no duplication,
correct layer, purpose-first).

## Reads

- `.github/instructions/documentation.instructions.md`
- `verification/documentation/checklist.md`,
  `verification/documentation/common-mistakes.md`
- `ARCHITECTURE_DECISIONS.md` (ADR-0002 specifically)

## Boundaries

- Does not invent documentation for undecided behavior — documents
  what the other roles actually built/decided, not aspirational intent.
- Does not duplicate a rule from `.github/instructions/` into `docs/`
  "for convenience" — links instead, per ADR-0002 and
  `verification/documentation/common-mistakes.md`'s first entry.
- Flags missing doc updates back to whichever role's change lacks them,
  rather than writing docs for a change it wasn't otherwise involved in.

## Typical trigger

Any change requiring a doc update in the same PR, per
`.github/instructions/documentation.instructions.md`; any new
`ARCHITECTURE_DECISIONS.md` entry from `architect/`.

## Output

Doc changes passing `verification/documentation/checklist.md`.

## Related MAW Documents

- `.github/instructions/documentation.instructions.md`
- `verification/documentation/`
- `ARCHITECTURE_DECISIONS.md`

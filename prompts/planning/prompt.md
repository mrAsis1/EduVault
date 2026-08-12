# Planning: Prompt

The reusable prompt text. Paste this directly, filling in the bracketed
part — it maps exactly to
[`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md)'s
required output structure, so any agent following it produces plans
usable with [`templates/feature.md`](../../templates/feature.md).

```
Plan the following: [describe the feature or change].

Do NOT write code.

Structure your output as:
1. Goal
2. Requirements
3. Architecture
4. Edge Cases
5. Folder Changes
6. Components
7. API
8. Database
9. Testing Strategy

If anything is ambiguous, ask before proceeding rather than guessing.
Wait for my approval before moving to implementation.
```

## Why this doesn't add new structure

This is `.github/prompts/plan-feature.md`'s existing nine-section
output list, reproduced verbatim as pasteable prompt text — not a new
or different structure. Per
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002, if the source file's structure ever changes, this file must
be updated to match, not diverge into its own version.

## Related

- [`.github/prompts/plan-feature.md`](../../.github/prompts/plan-feature.md)
- [`variants.md`](variants.md)

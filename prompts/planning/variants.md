# Planning: Variants

Scoped versions of [`prompt.md`](prompt.md) for when the full
nine-section structure is more ceremony than the change warrants. The
underlying process is unchanged — these are shorter, not different.

## Small fix (no new architecture)

```
Plan this small fix: [describe]. Skip Architecture, Folder Changes,
and Database sections if they're genuinely not affected — say so
explicitly rather than leaving them blank. Otherwise follow the full
structure in prompts/planning/prompt.md.
```

Use when the change is scoped enough that a full
[`templates/feature.md`](../../templates/feature.md) plan would be
[`foundations/yagni.md`](../../foundations/yagni.md)-violating
ceremony — but still state explicitly what was skipped and why, so the
omission is a decision, not an oversight.

## Architectural change

```
Plan this: [describe]. This may require a new architectural pattern —
before finalizing Architecture, explicitly state the current pattern,
the proposed pattern, and why the tradeoff is worth it, per
docs/architecture.md's "how to propose an architectural change."
```

Use when [`.github/instructions/architecture.instructions.md`](../../.github/instructions/architecture.instructions.md)'s
"any change that alters folder structure, module boundaries, or
introduces a new pattern" condition is met — this variant adds the
extra justification step that plain feature planning doesn't require.

## Related

- [`prompt.md`](prompt.md)
- [`foundations/yagni.md`](../../foundations/yagni.md)
- [`docs/architecture.md`](../../docs/architecture.md)

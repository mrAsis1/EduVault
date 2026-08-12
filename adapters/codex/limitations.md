# Codex: Limitations

Genuine gaps between what MAW workflows assume and Codex's actual
behavior — not disclaimers, per
[`.github/instructions/documentation.instructions.md`](../../.github/instructions/documentation.instructions.md)'s
"no throat-clearing."

## No persistent enforcement between sessions

Codex reads and can follow
`.github/instructions/*.instructions.md`, but nothing mechanically
blocks drift over a long session the way a linter or CI check would.
[`workflows/code-review.md`](../../workflows/code-review.md)'s human
review step remains necessary.

## `.github/prompts/*.md` are not built-in commands here

Pasting a prompt file's path doesn't invoke special behavior on its
own — its content has to actually be included or referenced in the
message.

## Confirm auto-scoping behavior before relying on it

Whether Codex auto-applies `.github/instructions/*.instructions.md`
by file type the way GitHub Copilot does natively should be verified
against Codex's own current documentation, not assumed — this
adapter doesn't claim parity it hasn't confirmed.

## Related

- [`best-practices.md`](best-practices.md)
- [`workflows/code-review.md`](../../workflows/code-review.md)

# GitHub Actions: Best Practices

## CI enforces what workflows/*.md describe, mechanically

[`workflows/feature-development.md`](../../workflows/feature-development.md)'s
"run the full test suite" and
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s "CI must pass"
are only guarantees if a workflow file actually runs tests, lint, and
type-check on every PR — the workflow docs state the requirement, the
Action enforces it.

## Reusable workflows over copy-pasted YAML

If the same job (test-and-lint) is duplicated across multiple workflow
files, extract a reusable workflow (`workflow_call`) — this is
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002 "never duplicate" applied to CI config.

## Fail fast, but only on what should block merge

Structure jobs so a lint failure doesn't need to wait for a slow test
suite to also fail before reporting — parallel jobs, not one long
serial pipeline, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
general efficiency reasoning applied to CI feedback loops.

## Related

- [`docs/git-workflow.md`](../../docs/git-workflow.md)
- [`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)

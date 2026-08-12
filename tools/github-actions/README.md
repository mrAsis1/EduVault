# Tool: GitHub Actions

CI/CD automation. This entry gets a fuller file set than most tools
because it has genuine security and performance content — a CI
pipeline is a real attack surface and a real cost center, not just a
workflow convention.

## In this entry

| File | Covers |
|---|---|
| [`best-practices.md`](best-practices.md) | Workflow structure, reuse |
| [`common-mistakes.md`](common-mistakes.md) | Recurring workflow mistakes |
| [`security.md`](security.md) | Secrets handling, third-party actions, `pull_request_target` |
| [`performance.md`](performance.md) | Caching, matrix builds, job parallelization |
| [`examples.md`](examples.md) | Worked workflow examples |

## Relationship to other layers

- [`docs/deployment.md`](../../docs/deployment.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`workflows/release.md`](../../workflows/release.md)

# GitHub Actions: Security

General rules: [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md).

## Secrets never appear in logs or PR-visible output

`echo "${{ secrets.API_KEY }}"` in a workflow step prints the secret to
logs, visible to anyone with read access to the repo (including,
depending on settings, external contributors viewing a fork's CI
output) — treat workflow logs like any other place
[`docs/security.md`](../../docs/security.md)'s "never log secrets"
applies.

## Pin third-party actions to a commit SHA, not a tag

A tag like `@v3` can be repointed by the action's maintainer (or an
attacker who compromises their account) to different code without your
workflow file changing — pin to a full commit SHA for anything that
runs with access to secrets.

## `pull_request_target` requires extra caution

See [`common-mistakes.md`](common-mistakes.md) — this is the single
most common real GitHub Actions security mistake, worth calling out
explicitly rather than assuming it's obvious.

## Scope `GITHUB_TOKEN` permissions explicitly

Default token permissions are broader than most jobs need — set
`permissions:` explicitly per workflow/job, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege."

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`docs/security.md`](../../docs/security.md)

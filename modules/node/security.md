# Node.js: Security

General rules: [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md).

## `npm audit` and dependency pinning

Node projects typically have deep dependency trees; a compromised
transitive dependency is a real, documented attack vector. Run `npm
audit` (or equivalent) regularly and pin versions in lockfiles — per
[`docs/security.md`](../../docs/security.md)'s "prefer well-maintained,
audited libraries."

## Never `eval` or dynamically `require` from user input

Both let attacker-controlled input become executed code — the Node
equivalent of `security.instructions.md`'s "never string-concatenate
SQL," generalized to "never let external input become code."

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`docs/security.md`](../../docs/security.md)

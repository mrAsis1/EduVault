# PowerShell: Security

## Never hardcode credentials in a script

Use `Get-Credential`, `SecureString`, or an OS-level credential
store/vault — a hardcoded password in a `.ps1` file is exactly the
"secrets committed to version control" problem
[`docs/security.md`](../../docs/security.md) warns against, just in a
script instead of application code.

## Understand execution policy, don't blanket-disable it

`Set-ExecutionPolicy Unrestricted` removes a real safeguard against
running unsigned/untrusted scripts. Scope any policy change as narrowly
as the actual need (a single signed script, a specific trusted
directory) rather than disabling the protection system-wide, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege."

## Sign scripts distributed for others to run

A signed script gives the recipient a verifiable source, similar in
spirit to why
[`docs/security.md`](../../docs/security.md) prefers audited libraries
over unverified code — a script someone else will execute on their
machine deserves the same trust chain.

## Related

- [`docs/security.md`](../../docs/security.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)

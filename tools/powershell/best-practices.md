# PowerShell: Best Practices

## Declare parameters explicitly, with types and validation

```powershell
param(
    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$Environment
)
```

This is
[`.github/instructions/typescript.instructions.md`](../../.github/instructions/typescript.instructions.md)'s
"explicit types, no implicit any" spirit applied to scripting — a
script that accepts anything and fails deep inside its logic is harder
to debug than one that validates its inputs at the top, per
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"fail fast on invalid input."

## Use `Set-StrictMode -Version Latest` and `$ErrorActionPreference = "Stop"`

Without these, a typo'd variable name or a failed cmdlet can silently
continue rather than stopping the script — the PowerShell-specific form
of [`.github/instructions/debugging.instructions.md`](../../.github/instructions/debugging.instructions.md)'s
"avoid silencing errors."

## Approved verbs for function names (`Get-`, `Set-`, `New-`, not custom verbs)

`Get-Verb` lists PowerShell's approved verb list — using it keeps
scripts consistent with the ecosystem's own naming convention, the
PowerShell-specific instance of
[`docs/coding-standards.md`](../../docs/coding-standards.md)'s general
naming-consistency reasoning.

## Related

- [`principles/error-handling.md`](../../principles/error-handling.md)
- [`docs/coding-standards.md`](../../docs/coding-standards.md)

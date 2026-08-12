# PowerShell: Examples

## Example: script with validated parameters and fail-fast error handling

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidateSet("staging", "production")]
    [string]$Environment
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

try {
    Write-Host "Deploying to $Environment..."
    # deployment logic
}
catch {
    Write-Error "Deployment failed: $_"
    exit 1
}
```

**Why this is a good example:** `$Environment` can only ever be a
known-valid value (per [`best-practices.md`](best-practices.md)), and
any unexpected error stops the script with a clear message rather than
continuing in a broken state, per
[`principles/error-handling.md`](../../principles/error-handling.md).

## Related

- [`best-practices.md`](best-practices.md)

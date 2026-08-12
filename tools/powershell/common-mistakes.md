# PowerShell: Common Mistakes

## Not setting strict mode, letting errors pass silently

```powershell
# Wrong: a typo'd variable name is $null, not an error — script continues with bad data
$reslut = Get-Something
Write-Host $result

# Right
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
```

See [`best-practices.md`](best-practices.md).

## Hardcoding credentials in a script

```powershell
# Wrong
$password = "hardcoded-secret"

# Right: prompt, use SecureString, or read from a credential manager/vault
$cred = Get-Credential
```

Treat credentials in scripts with the same discipline as any other
secret, per [`docs/security.md`](../../docs/security.md) — see also
[`security.md`](security.md).

## Related

- [`security.md`](security.md)

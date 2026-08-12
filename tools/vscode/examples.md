# VS Code: Examples

## Example: shared workspace settings enforcing existing style rules

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

**Why this is a good example:** it makes
[`docs/style-guide.md`](../../docs/style-guide.md)'s "formatting is
automated, not debated" actually true at edit time, not just at CI
time — and contains nothing personal, so it's safe to commit and share.

## Related

- [`best-practices.md`](best-practices.md)

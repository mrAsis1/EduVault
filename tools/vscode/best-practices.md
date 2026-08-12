# VS Code: Best Practices

## Commit `.vscode/settings.json` for project-shared settings only

Format-on-save, the project's ESLint/Prettier config paths, and
recommended extensions are genuinely project-shared and worth
committing — per
[`docs/style-guide.md`](../../docs/style-guide.md)'s "formatting is
automated, not debated," committing the settings that make that
automation actually run for every contributor removes "did you
remember to configure your editor" as a source of inconsistency.
Personal preferences (theme, font size) belong in user settings, not
the workspace file.

## `.vscode/extensions.json` recommends, doesn't force

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

VS Code prompts new contributors to install these — a lightweight way
to make [`docs/style-guide.md`](../../docs/style-guide.md)'s tooling
expectations discoverable without mandating a specific editor.

## Related

- [`docs/style-guide.md`](../../docs/style-guide.md)

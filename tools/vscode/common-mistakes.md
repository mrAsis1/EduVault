# VS Code: Common Mistakes

## Committing personal settings into the shared workspace file

Font size, theme, and personal keybindings in a committed
`.vscode/settings.json` create unnecessary diff noise and impose one
person's preferences on everyone — keep the committed file scoped to
genuinely project-shared settings, per
[`best-practices.md`](best-practices.md).

## Relying on personal editor config instead of a committed one

If format-on-save only works because of an individual's personal user
settings, a new contributor's first PR fails formatting checks they
had no way to know about — commit the settings that matter.

## Related

- [`best-practices.md`](best-practices.md)

# Tailwind: Project Structure

```
tailwind.config.js       — theme tokens, plugins, content paths
src/
  styles/
    globals.css             — Tailwind directives + genuinely global rules only
```

## `content` paths must cover every file using Tailwind classes

Tailwind only generates CSS for classes it can find by scanning the
`content` glob — a file outside that glob silently gets no styles, a
common source of "my class isn't working" confusion. Keep this
config accurate as the project structure changes.

## Related

- [`docs/folder-structure.md`](../../docs/folder-structure.md)

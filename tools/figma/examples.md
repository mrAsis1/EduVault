# Figma: Examples

## Example: token names matching across design and code

```
Figma color style: brand/600 (#3366FF)
```

```js
// tailwind.config.js
theme: {
  colors: {
    brand: {
      600: "#3366FF", // matches Figma's brand/600 exactly, same name
    },
  },
}
```

**Why this is a good example:** a designer changing `brand/600` in
Figma and a developer updating `tailwind.config.js` are clearly making
the same change to the same named thing — no translation step, no
drift risk, matching [`best-practices.md`](best-practices.md).

## Related

- [`modules/tailwind/architecture.md`](../../modules/tailwind/architecture.md)

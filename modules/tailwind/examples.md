# Tailwind: Examples

## Example: extracting a repeated pattern into a component, not a CSS class

```tsx
// Before: repeated across many places, hard to keep consistent
<button className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-md font-medium">
  Save
</button>

// After: one definition, per when-to-create-component.md
function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-md font-medium"
      {...props}
    >
      {children}
    </button>
  );
}
```

**Why this is a good example:** the styling decision is made once; a
future design change (new brand color) touches one file, not every call
site — matching [`best-practices.md`](best-practices.md).

## Related

- [`modules/react/examples.md`](../react/examples.md)

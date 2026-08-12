# Next.js: Project Structure

## `app/` directory conventions

```
app/
  (marketing)/          — route group, no URL segment, shared layout
    page.tsx
  orders/
    [id]/
      page.tsx           — /orders/:id
      loading.tsx         — loading UI for this segment
      error.tsx            — error boundary for this segment
    layout.tsx
  api/
    orders/
      route.ts             — API route handler
  layout.tsx                — root layout
```

## Colocate feature logic, not just pages

Non-route files (components, hooks specific to one route) can live
alongside the route segment rather than in a separate top-level tree —
Next.js only treats `page.tsx`, `layout.tsx`, `route.ts`, etc. as
special; everything else colocated is ignored by the router. This is
[`patterns/feature-folder.md`](../../patterns/feature-folder.md)
applied within the App Router's constraints.

## Related

- [`modules/react/project-structure.md`](../react/project-structure.md)
- [`patterns/feature-folder.md`](../../patterns/feature-folder.md)

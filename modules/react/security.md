# React: Security

General security rules (validate all input, escape output rendered
into HTML/DOM contexts, never trust client-side validation alone) live
in
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
and [`docs/security.md`](../../docs/security.md). This file covers
where those rules bite specifically in React.

## `dangerouslySetInnerHTML` is exactly what it says

React escapes rendered content by default — this is why most React
apps are naturally resistant to basic XSS. `dangerouslySetInnerHTML`
turns that protection off for whatever you pass it. If it's genuinely
needed (rendering trusted, pre-sanitized HTML from a CMS), sanitize
server-side or with a library like DOMPurify immediately before
rendering, never with raw user input.

```tsx
// Wrong: renders raw user input as HTML
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// Right: let React escape it as text
<div>{userComment}</div>
```

## Client-side checks are UX, not security

A disabled button, a form validator, or a route guard implemented in
React state can be bypassed by anyone calling the API directly. Every
check that matters for security must also exist server-side, per
`security.instructions.md`'s "never trust client-side validation as
the only validation." Route guards in React Router / Next.js middleware
are for user experience (don't show the page); the API must
independently authorize the request.

## Secrets don't belong in client bundles

Anything in `import.meta.env.VITE_*` or `NEXT_PUBLIC_*` ships to every
visitor's browser, unminified in the network tab. Only public,
non-sensitive values (a public API base URL, a publishable Stripe key)
belong there. Real secrets stay server-side, per
[`docs/security.md`](../../docs/security.md)'s "why secrets never live
in code."

## Dependency risk

React apps typically carry a large `node_modules` tree. Audit
dependencies regularly (`npm audit` or equivalent) and avoid installing
packages for problems your own code could solve in a few lines — fewer
dependencies is a smaller supply-chain surface. See
[`heuristics/when-not-to-abstract.md`](../../heuristics/when-not-to-abstract.md)
for the general "don't add a dependency for a one-off need" reasoning.

## URLs and redirects built from user input

```tsx
// Wrong: user-controlled redirect target
window.location.href = searchParams.get("returnTo");

// Right: validate against an allowlist of known internal paths
const safePath = isKnownInternalPath(searchParams.get("returnTo"))
  ? searchParams.get("returnTo")
  : "/";
```

Unvalidated redirect targets from query params are a common open-redirect
vector — allowlist rather than trust.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`principles/security-first.md`](../../principles/security-first.md)
- [`docs/security.md`](../../docs/security.md)

# Authorization

## Purpose

Help choose how the system decides what an authenticated user may do.

## Why it Matters

Authorization failures are either too permissive or too restrictive. A clear model makes permissions predictable and easier to audit.

## Core Concepts

- RBAC assigns permissions to roles.
- ABAC evaluates attributes such as resource, ownership, or context.
- ACLs attach permissions directly to individual resources.

## When to Use

- Choose RBAC when access maps cleanly to a small set of roles.
- Choose ABAC when rules depend on context or resource attributes.
- Choose ACLs when many exceptions apply to individual records.

- Centralize policy decisions.
- Check authorization on the server for every sensitive action.
- Keep rules understandable enough to explain to a reviewer or auditor.

## When Not to Use

- Embedding permission checks in random UI branches only.
- Creating too many roles because edge cases were not modeled well.
- Combining several models without a clear policy boundary.

## Benefits

RBAC is simple and maintainable. ABAC is more expressive but harder to reason about. ACLs are precise.

## Drawbacks

They can become noisy at scale.

## Example

A small admin console may use RBAC. A file-sharing app may need ACLs for per-document sharing.

## Related MAW Documents

- [Security First](../principles/security-first.md)
- [Authentication](authentication.md)
- [API Design](../principles/api-design.md)

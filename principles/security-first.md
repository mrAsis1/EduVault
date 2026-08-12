# Security First

## Purpose

Explain how to design systems that assume input is untrusted and mistakes are inevitable.

## Why it Matters

Security failures can expose data, damage trust, and create legal or operational risk. Security-first design reduces the chance that a small bug becomes a serious incident.

## Core Concepts

- Validate all external input.
- Use least privilege.
- Treat secrets as sensitive data.

## When to Use

- Verify data on the server.
- Protect credentials, tokens, and personal data carefully.
- Prefer audited libraries over custom crypto or auth logic.

- Keep security checks close to the boundary.
- Log safely without exposing secrets.
- Review authorization separately from authentication.

## When Not to Use

- Trusting client-side validation alone.
- Storing secrets in code or plain text files.
- Adding security controls that are hard to maintain or explain.

## Benefits

Security adds friction.

## Drawbacks

That friction is cheaper than incident response. The goal is controlled risk, not perfect certainty.

## Example

Validate request payloads at the API boundary, store passwords with proper hashing, and limit each service account to the permissions it actually needs.

## Related MAW Documents

- [Authentication](../decision-trees/authentication.md)
- [Authorization](../decision-trees/authorization.md)
- [Error Handling](error-handling.md)

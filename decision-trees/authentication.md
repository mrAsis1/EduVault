# Authentication

## Purpose

Help choose how users prove who they are in a system.

## Why it Matters

Authentication affects user experience, security risk, and operational complexity. Picking a method that fits the client type and trust boundary avoids brittle login flows.

## Core Concepts

- Session cookies work well for browser-based apps.
- Tokens work well for APIs, mobile apps, and distributed clients.
- Federated identity reduces password handling when a trusted provider already exists.

## When to Use

- Use session-based auth when the browser owns the conversation.
- Use token-based auth when clients are not tied to one browser session.
- Use SSO or OIDC when identity should come from an external provider.

- Protect credentials with strong hashing and secure transport.
- Separate authentication from authorization.
- Add MFA when the risk justifies the extra step.

## When Not to Use

- Building custom auth protocols.
- Storing long-lived secrets where short-lived ones will do.
- Letting client-side checks stand in for server-side verification.

## Benefits

Sessions are easier for browser apps. Tokens are better for distributed clients.

## Drawbacks

They increase token lifecycle and revocation complexity.

## Example

A consumer web app often uses session cookies. A mobile app talking to multiple services often uses OAuth-based token flows.

## Related MAW Documents

- [Security First](../principles/security-first.md)
- [Authorization](authorization.md)
- [API Design](../principles/api-design.md)

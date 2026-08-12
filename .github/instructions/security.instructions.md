---
applyTo: "**/*"
---

Always:

- Validate and sanitize all external input (user, API, file, env)
- Use parameterized queries — never string-concatenated SQL
- Escape output rendered into HTML/DOM contexts
- Read secrets from environment/secret managers, never hardcode
- Use the principle of least privilege for tokens, keys, and roles

Never:

- Log secrets, tokens, passwords, or PII
- Commit `.env` files or credentials
- Trust client-side validation as the only validation
- Roll your own crypto or auth primitives
- Disable TLS/certificate verification to "make it work"

Prefer:

- Well-maintained, audited libraries over custom security code
- Allowlists over denylists for input validation
- Short-lived tokens over long-lived ones

Flag — do not silently fix — any existing code that violates these rules
when you encounter it. Full threat model and rationale live in
`docs/security.md`.

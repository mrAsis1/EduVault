# Security Verification Checklist

Each item traces to a rule in `.github/instructions/security.instructions.md`
(short reference: `[SEC-instr]`) or `docs/security.md` (`[SEC-doc]`). Do not
add an item here that isn't backed by one of those two files — add the rule
there first (ADR-0002).

Mark each item Pass / Fail / N/A. Any Fail blocks merge unless explicitly
waived in the PR description with a reason.

## Input handling

- [ ] All external input (user, API, file, env) is validated and
      sanitized before use `[SEC-instr]`
- [ ] Validation uses allowlists rather than denylists where practical
      `[SEC-instr]`
- [ ] Client-side validation is not relied on as the only validation
      `[SEC-instr]`

## Data access

- [ ] All SQL/queries are parameterized — no string-concatenated queries
      `[SEC-instr]`
- [ ] Output rendered into HTML/DOM contexts is escaped `[SEC-instr]`

## Secrets and credentials

- [ ] Secrets are read from environment/secret managers, never hardcoded
      `[SEC-instr]`
- [ ] No secrets, tokens, passwords, or PII appear in logs `[SEC-instr]`
- [ ] No `.env` files or credentials are committed `[SEC-instr]`

## Auth and tokens

- [ ] No custom/rolled-your-own crypto or auth primitives `[SEC-instr]`
- [ ] Tokens, keys, and roles follow least privilege `[SEC-instr]`
- [ ] Tokens favor short-lived over long-lived where the design allows it
      `[SEC-instr]`

## Transport

- [ ] TLS/certificate verification is never disabled to "make it work"
      `[SEC-instr]`

## Dependencies

- [ ] Security-sensitive logic uses well-maintained, audited libraries
      instead of custom implementations `[SEC-instr]`

## Legacy code encountered during this change

- [ ] Any pre-existing violation of the above found in touched code is
      flagged in the PR/review, not silently fixed `[SEC-instr]`

## Related MAW Documents

- `.github/instructions/security.instructions.md`
- `docs/security.md`
- `verification/security/review-template.md`

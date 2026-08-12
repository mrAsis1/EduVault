# Common Security Mistakes

Concrete, recurring failure patterns — kept separate from
`checklist.md` because a checklist item is an abstraction ("no secrets in
logs") and a mistake is the specific, easy-to-miss way that abstraction
gets violated in practice. Each entry links back to the checklist item it
falls under.

## Input handling

**Validating shape but not content.** Confirming a field is a string of
the right length, but not that it's within an expected set of values
(e.g. accepting any string as a "role" instead of an enum). Traces to:
allowlists over denylists.

**Trusting a value because it came from your own frontend.** The
request can be replayed or crafted directly against the API regardless of
what the UI sends. Traces to: client-side validation not the only
validation.

## Data access

**Parameterizing the query but not the identifier.** Table/column names
interpolated directly because "you can't parameterize an identifier,"
without an allowlist of valid identifiers. Traces to: no
string-concatenated queries.

**Escaping on the way in instead of the way out.** Sanitizing input at
write time doesn't protect a context that changes later (e.g. data
rendered into an HTML attribute vs. a `<script>` block need different
escaping). Traces to: escape output rendered into HTML/DOM contexts.

## Secrets and credentials

**Logging the whole request/error object.** A caught exception or debug
log that dumps a full request payload or error context, which happens to
include an auth header or token. Traces to: no secrets/tokens in logs.

**`.env.example` drifting into `.env` in a copy-paste.** Committing a
"just for local testing" env file that turns out to have a real key
because it was copied from a working `.env` rather than written fresh.
Traces to: no committed `.env` files or credentials.

## Auth and tokens

**Writing a "simple" token check instead of using the existing auth
library.** Usually justified as a small exception for one endpoint.
Traces to: no custom auth primitives.

**Long-lived tokens issued "temporarily" during development that ship to
production.** Traces to: prefer short-lived tokens.

## Transport

**Disabling certificate verification to get past a self-signed cert in a
dev/staging environment**, then the flag ships because it wasn't
environment-gated. Traces to: never disable TLS verification to "make it
work."

## Related MAW Documents

- `verification/security/checklist.md`
- `.github/instructions/security.instructions.md`

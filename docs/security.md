# Security

## Threat model summary

Monarch-built applications should assume: input is hostile until proven
otherwise, the network is hostile, and anything committed to version
control is eventually public — even in "private" repos, given forks,
leaked credentials, and CI logs. Every rule in
`.github/instructions/security.instructions.md` traces back to one of
these three assumptions.

## Why input validation happens server-side

Client-side validation is a UX convenience — it can always be bypassed by
calling the API directly. Anything client-side validation catches must
also be checked server-side, or it isn't actually enforced, it's just
suggested.

## Why parameterized queries, not string concatenation

Concatenating user input into a SQL string means the database can't tell
the difference between "data" and "code" — that's the entire mechanism
behind SQL injection. Parameterized queries keep that boundary intact at
the driver level, which is more reliable than trying to sanitize every
possible injection pattern by hand.

## Why secrets never live in code

A secret committed to git history stays there even after being deleted in
a later commit — `git log` and forks preserve it. Environment variables
and secret managers keep secrets out of the diff entirely, and allow
rotation without a code change.

## Why least privilege

A token or role with more access than it needs turns a small compromise
(one leaked API key) into a large one (full database access). Scoping
every credential to only what it actually needs limits the blast radius
of any single leak.

## Why not to roll your own crypto/auth

Cryptography and authentication have decades of subtle, non-obvious
failure modes (timing attacks, padding oracles, session fixation) that
audited libraries have already had to fix in production. A custom
implementation starts from zero on all of that hard-won knowledge.

## Escalation

If you find an existing security violation while working on unrelated
code, flag it rather than silently fixing it inline — a security fix
deserves its own reviewed, tested change, not a drive-by edit buried in
an unrelated diff.

# Example: Good Feature Plan

This is a worked example of `templates/feature.md` filled in well, as
produced by `.github/prompts/plan-feature.md`. It's illustrative — the
feature itself is fictional. What matters is the *level of specificity*:
concrete acceptance criteria, real edge cases, no vague filler.

---

# Feature: Rate-limited password reset requests

## Goal

Prevent abuse of the password reset endpoint by limiting how often a
single account or IP can trigger a reset email, without blocking
legitimate users who genuinely forget their password more than once.

## Requirements

- [ ] Max 3 reset requests per account per hour
- [ ] Max 10 reset requests per IP per hour
- [ ] User sees a clear, non-technical message when rate-limited
- [ ] Rate limit state does not persist across server restarts in a way
      that requires a database migration (use existing Redis instance)

## Acceptance Criteria

- [ ] Given a user requests a reset 3 times in an hour, when they request
      a 4th time, then they see "Too many requests, try again later" and
      no email is sent
- [ ] Given a user requests a reset from a rate-limited IP but an
      account that itself is under its own limit, when they request,
      then the IP limit still blocks it
- [ ] Given an hour has passed since the first request in a rate-limit
      window, when the user requests again, then the request succeeds

## Edge Cases

- Shared IPs (corporate NAT, university networks) hitting the IP limit
  from legitimate, unrelated users — mitigated by IP limit being higher
  (10) than account limit (3)
- Account email changed mid-window — rate limit key is user ID, not
  email, so this doesn't reset the limit
- Redis unavailable — fail open (allow the request) rather than fail
  closed (block all resets), since availability of password recovery
  matters more than rate limiting during an outage

## Architecture Impact

- Fits existing pattern: yes — uses the existing Redis-backed rate
  limiter middleware already applied to the login endpoint
- Affected modules: `auth/reset-password`, `middleware/rate-limit`

## Components

| Component | Responsibility |
|---|---|
| `RateLimitMiddleware` | Existing — reused with new config for this route |
| `ResetPasswordController` | Add rate-limit check before sending email |

## API

| Method | Endpoint | Request | Response |
|---|---|---|---|
| POST | `/auth/reset-password` | `{ email }` | `200` on success, `429` with retry-after header when limited |

## Database

- New tables/fields: none
- Migrations required: no (Redis, not the primary database)

## Testing Strategy

- Unit: rate limiter returns correct allow/deny per key and window
- Integration: 4th request within an hour returns 429, email not sent
- E2E: not needed — this is not a critical user flow requiring full
  browser-level coverage

## Future Improvements

- Add CAPTCHA after repeated failures instead of a hard block, to reduce
  friction for legitimate users who forget the limit exists

---

## Why this is a good example

- Every requirement is testable, not aspirational ("secure" would be
  vague; "max 3 per account per hour" is not).
- Edge cases include a genuine tradeoff decision (fail open on Redis
  outage) with a stated reason, not just a list of scenarios.
- It reuses an existing pattern (`RateLimitMiddleware`) instead of
  inventing a new one, per `docs/architecture.md`.
- Testing strategy explicitly says *why* E2E isn't needed here, rather
  than silently omitting it.

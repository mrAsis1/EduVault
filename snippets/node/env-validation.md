# Environment Variable Validation

Validates required environment variables at process startup instead of
failing deep inside request handling when a missing variable is first
read.

Complies with: `.github/instructions/security.instructions.md` (secrets
from environment, never hardcoded).

```ts
interface RequiredEnv {
  DATABASE_URL: string;
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

export function loadEnv(): RequiredEnv {
  const required = ["DATABASE_URL", "SUPABASE_URL", "SUPABASE_ANON_KEY"] as const;
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL!,
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };
}
```

## Usage

Call `loadEnv()` once at startup, before the server begins accepting
requests — fail fast instead of failing on the first request that
touches the missing variable.

## Related MAW Documents

- `.github/instructions/security.instructions.md`
- `docs/deployment.md` (environment variables, not hardcoded values)

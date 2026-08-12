# Node.js: Examples

## Example: fail-fast config validation at startup

```ts
// config/index.ts
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
});

export const config = envSchema.parse(process.env); // throws immediately if invalid
```

**Why this is a good example:** a missing or malformed `DATABASE_URL`
crashes the app at startup with a clear error, not three requests into
production traffic — matching
[`best-practices.md`](best-practices.md)'s "validate environment
variables at startup."

## Related

- [`modules/typescript/examples.md`](../typescript/examples.md)

# Docker: Common Mistakes

## Baking secrets into an image layer

```dockerfile
# Wrong: the secret is now permanently in the image's layer history,
# extractable even if a later layer "removes" it
ENV API_KEY=sk_live_abc123
RUN curl -H "Authorization: Bearer $API_KEY" ...

# Right: pass secrets at runtime, not build time
# docker run -e API_KEY=$API_KEY ...
```

See [`security.md`](security.md).

## Running as root inside the container

Without an explicit `USER` instruction, the container runs as root by
default — unnecessary privilege per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege."

## Copying the entire project before installing dependencies

Defeats layer caching — see [`best-practices.md`](best-practices.md).
Every source change invalidates the (expensive) dependency install
layer unnecessarily.

## Related

- [`security.md`](security.md)

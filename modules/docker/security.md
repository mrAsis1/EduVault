# Docker: Security

## Never bake secrets into image layers

Even a later `RUN rm` doesn't remove a secret from an earlier layer's
history — anyone with the image can extract it. Use build secrets
(`--secret` in BuildKit) or runtime environment variables instead, per
[`docs/security.md`](../../docs/security.md).

## Run as a non-root user

```dockerfile
RUN addgroup -S app && adduser -S app -G app
USER app
```

Limits the blast radius if the container is compromised, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md).

## Scan images for known vulnerabilities

Base images and installed packages can carry known CVEs — scan with
`docker scan`, Trivy, or equivalent as part of CI, the containerized
form of [`docs/security.md`](../../docs/security.md)'s dependency risk
reasoning.

## Related

- [`docs/security.md`](../../docs/security.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)

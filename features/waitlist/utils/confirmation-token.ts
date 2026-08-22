import "server-only";
import { createHash, randomBytes } from "node:crypto";

const confirmationLifetimeMilliseconds = 24 * 60 * 60 * 1000;

export function createWaitlistConfirmationToken() {
  const token = randomBytes(32).toString("base64url");

  return {
    token,
    tokenHash: createHash("sha256").update(token).digest("hex"),
    expiresAt: new Date(
      Date.now() + confirmationLifetimeMilliseconds,
    ).toISOString(),
  };
}

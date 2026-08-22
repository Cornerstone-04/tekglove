import { confirmWaitlistAction } from "./actions/confirm-waitlist";
import { Button, ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";

type ConfirmationStatus = "confirmed" | "invalid" | "error";

type WaitlistConfirmationPageProps = {
  status?: string;
  token?: string;
};

const confirmationStates: Record<
  ConfirmationStatus,
  { eyebrow: string; heading: string; description: string }
> = {
  confirmed: {
    eyebrow: "Email confirmed",
    heading: "You are on the list.",
    description:
      "Your place on the TekGlove waitlist is confirmed. We will keep you updated as the platform develops.",
  },
  invalid: {
    eyebrow: "Link unavailable",
    heading: "This link cannot be used.",
    description:
      "The confirmation link is invalid, has expired, or has already been used. Submit the waitlist form again to request a new one.",
  },
  error: {
    eyebrow: "Confirmation interrupted",
    heading: "Something went wrong.",
    description:
      "We could not confirm your email right now. Please try the link again in a few moments.",
  },
};

function isConfirmationStatus(value?: string): value is ConfirmationStatus {
  return value === "confirmed" || value === "invalid" || value === "error";
}

export function WaitlistConfirmationPage({
  status,
  token,
}: WaitlistConfirmationPageProps) {
  const resolvedStatus = isConfirmationStatus(status) ? status : undefined;
  const state = resolvedStatus ? confirmationStates[resolvedStatus] : undefined;

  return (
    <main className="hero-texture relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden px-6 py-28 md:px-12">
      <ShaderBackdrop
        variant="waitlist"
        className="mask-[radial-gradient(circle_at_center,black,transparent_68%)] opacity-30"
      />
      <div className="relative z-10 w-full max-w-176 rounded-4xl border border-white/10 bg-black/55 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
        <p className="section-kicker mb-6">
          {state?.eyebrow ?? "Confirm your email"}
        </p>
        <h1 className="max-w-[12ch] font-heading text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-white">
          {state?.heading ?? "One last step."}
        </h1>
        <p className="copy-secondary mt-7 max-w-[52ch] text-base leading-7 sm:text-lg">
          {state?.description ??
            "Confirm your email address to secure your place on the TekGlove waitlist and receive development updates."}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {!state && token ? (
            <form action={confirmWaitlistAction}>
              <input type="hidden" name="token" value={token} />
              <Button type="submit">Confirm my place</Button>
            </form>
          ) : null}

          {resolvedStatus === "invalid" || (!state && !token) ? (
            <ButtonLink href="/waitlist">Join the waitlist</ButtonLink>
          ) : null}

          {resolvedStatus === "error" && token ? (
            <ButtonLink
              href={`/waitlist/confirm?token=${encodeURIComponent(token)}`}
              variant="secondary"
            >
              Try again
            </ButtonLink>
          ) : null}

          {resolvedStatus === "error" && !token ? (
            <ButtonLink href="/waitlist">Return to waitlist</ButtonLink>
          ) : null}

          {resolvedStatus === "confirmed" ? (
            <ButtonLink href="/">Return home</ButtonLink>
          ) : null}
        </div>
      </div>
    </main>
  );
}

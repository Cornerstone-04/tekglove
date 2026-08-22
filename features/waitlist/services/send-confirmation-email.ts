import "server-only";
import { serverEnv } from "@/shared/config/server-env";
import { resend } from "@/shared/lib/resend/server";
import { createWaitlistConfirmationEmail } from "../emails/waitlist-confirmation";

type SendConfirmationEmailOptions = {
  confirmationToken: string;
  email: string;
  firstName: string;
};

export class WaitlistEmailError extends Error {
  constructor() {
    super("We could not send the confirmation email.");
    this.name = "WaitlistEmailError";
  }
}

export async function sendWaitlistConfirmationEmail({
  confirmationToken,
  email,
  firstName,
}: SendConfirmationEmailOptions) {
  const confirmationUrl = new URL("/waitlist/confirm", serverEnv.siteUrl);
  confirmationUrl.searchParams.set("token", confirmationToken);

  const message = createWaitlistConfirmationEmail({
    confirmationUrl: confirmationUrl.toString(),
    firstName,
  });

  const { data, error } = await resend.emails.send({
    from: serverEnv.resendFromEmail,
    to: email,
    replyTo: serverEnv.waitlistNotificationEmail,
    ...message,
  });

  if (error || !data) {
    throw new WaitlistEmailError();
  }

  return data.id;
}

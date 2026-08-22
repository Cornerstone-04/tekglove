import "server-only";
import { serverEnv } from "@/shared/config/server-env";
import { resend } from "@/shared/lib/resend/server";
import { createWaitlistNotificationEmail } from "../emails/waitlist-notification";

type SendWaitlistNotificationOptions = Parameters<
  typeof createWaitlistNotificationEmail
>[0];

export async function sendWaitlistNotification(
  options: SendWaitlistNotificationOptions,
) {
  const message = createWaitlistNotificationEmail(options);
  const { error } = await resend.emails.send({
    from: serverEnv.resendFromEmail,
    to: serverEnv.waitlistNotificationEmail,
    replyTo: options.email,
    ...message,
  });

  if (error) {
    throw new Error("Could not send the internal waitlist notification.");
  }
}

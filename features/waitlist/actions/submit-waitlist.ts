"use server";

import { ZodError } from "zod";
import { sendWaitlistConfirmationEmail } from "../services/send-confirmation-email";
import {
  deleteWaitlistEntry,
  markWaitlistConfirmationSent,
  submitWaitlistEntry,
  WaitlistSubmissionError,
} from "../services/submit-waitlist";

export type SubmitWaitlistActionResult =
  { status: "success" } | { status: "error"; message: string };

export async function submitWaitlistAction(
  input: unknown,
): Promise<SubmitWaitlistActionResult> {
  let entryId: string | undefined;

  try {
    const entry = await submitWaitlistEntry(input);
    entryId = entry.entryId;

    await sendWaitlistConfirmationEmail({
      confirmationToken: entry.confirmationToken,
      email: entry.email,
      firstName: entry.firstName,
    });

    try {
      await markWaitlistConfirmationSent(entry.entryId);
    } catch (error) {
      console.error("Could not record waitlist confirmation delivery", error);
    }

    return { status: "success" };
  } catch (error) {
    if (entryId) {
      try {
        await deleteWaitlistEntry(entryId);
      } catch (cleanupError) {
        console.error(
          "Could not clean up failed waitlist submission",
          cleanupError,
        );
      }
    }

    if (
      error instanceof WaitlistSubmissionError &&
      error.code === "duplicate_email"
    ) {
      return { status: "success" };
    }

    if (error instanceof ZodError) {
      return {
        status: "error",
        message: "Please review your information and try again.",
      };
    }

    console.error("Waitlist submission failed", error);
    return {
      status: "error",
      message:
        "We could not join the waitlist right now. Please try again shortly.",
    };
  }
}

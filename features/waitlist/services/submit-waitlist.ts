import "server-only";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { waitlistSubmissionSchema } from "../schemas/waitlist-submission";
import { createWaitlistConfirmationToken } from "../utils/confirmation-token";

export class WaitlistSubmissionError extends Error {
  constructor(
    message: string,
    readonly code: "duplicate_email" | "persistence_failed",
  ) {
    super(message);
    this.name = "WaitlistSubmissionError";
  }
}

export async function submitWaitlistEntry(input: unknown) {
  const submission = waitlistSubmissionSchema.parse(input);
  const confirmation = createWaitlistConfirmationToken();
  const supabase = createSupabaseServerClient();

  const { data: entry, error: entryError } = await supabase
    .from("waitlist_entries")
    .insert({
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      marketing_consent: submission.marketingConsent,
      intended_use: submission.intendedUse,
      country_code: submission.countryCode,
      organisation_name: submission.organisationName,
      use_case: submission.useCase,
      confirmation_token_hash: confirmation.tokenHash,
      confirmation_expires_at: confirmation.expiresAt,
    })
    .select("id")
    .single();

  if (entryError) {
    if (entryError.code === "23505") {
      throw new WaitlistSubmissionError(
        "This email address is already on the waitlist.",
        "duplicate_email",
      );
    }

    throw new WaitlistSubmissionError(
      "We could not save this waitlist request.",
      "persistence_failed",
    );
  }

  const { error: interestsError } = await supabase
    .from("waitlist_interests")
    .insert(
      submission.productInterests.map((productSlug) => ({
        waitlist_entry_id: entry.id,
        product_slug: productSlug,
      })),
    );

  if (interestsError) {
    await supabase.from("waitlist_entries").delete().eq("id", entry.id);

    throw new WaitlistSubmissionError(
      "We could not save your product interests.",
      "persistence_failed",
    );
  }

  return {
    entryId: entry.id,
    confirmationToken: confirmation.token,
    email: submission.email,
    firstName: submission.firstName,
  };
}

export async function markWaitlistConfirmationSent(entryId: string) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("waitlist_entries")
    .update({ confirmation_sent_at: new Date().toISOString() })
    .eq("id", entryId);

  if (error) {
    throw new WaitlistSubmissionError(
      "We could not record the confirmation email.",
      "persistence_failed",
    );
  }
}

export async function deleteWaitlistEntry(entryId: string) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("waitlist_entries")
    .delete()
    .eq("id", entryId);

  if (error) {
    throw new WaitlistSubmissionError(
      "We could not clean up the waitlist request.",
      "persistence_failed",
    );
  }
}

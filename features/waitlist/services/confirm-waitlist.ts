import "server-only";
import { createHash } from "node:crypto";
import { z } from "zod";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

const confirmationTokenSchema = z.string().regex(/^[A-Za-z0-9_-]{43}$/);

export type WaitlistConfirmationResult =
  | {
      status: "confirmed";
      entry: {
        id: string;
        countryCode: string | null;
        email: string;
        firstName: string;
        intendedUse: string | null;
        lastName: string;
        organisationName: string | null;
        productInterests: string[];
        useCase: string | null;
      };
    }
  | { status: "invalid" };

export async function confirmWaitlistEntry(
  input: unknown,
): Promise<WaitlistConfirmationResult> {
  const parsedToken = confirmationTokenSchema.safeParse(input);

  if (!parsedToken.success) {
    return { status: "invalid" };
  }

  const tokenHash = createHash("sha256").update(parsedToken.data).digest("hex");
  const confirmedAt = new Date().toISOString();
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("waitlist_entries")
    .update({
      status: "subscribed",
      confirmed_at: confirmedAt,
      confirmation_token_hash: null,
      confirmation_expires_at: null,
    })
    .eq("confirmation_token_hash", tokenHash)
    .eq("status", "pending")
    .gt("confirmation_expires_at", confirmedAt)
    .select(
      "id, first_name, last_name, email, intended_use, country_code, organisation_name, use_case",
    )
    .maybeSingle();

  if (error) {
    throw new Error("Could not confirm the waitlist entry.");
  }

  if (!data) return { status: "invalid" };

  const { data: interests, error: interestsError } = await supabase
    .from("waitlist_interests")
    .select("product_slug")
    .eq("waitlist_entry_id", data.id);

  if (interestsError) {
    console.error(
      "Could not load confirmed waitlist interests",
      interestsError,
    );
  }

  return {
    status: "confirmed",
    entry: {
      id: data.id,
      countryCode: data.country_code,
      email: data.email,
      firstName: data.first_name,
      intendedUse: data.intended_use,
      lastName: data.last_name,
      organisationName: data.organisation_name,
      productInterests:
        interests?.map((interest) => interest.product_slug) ?? [],
      useCase: data.use_case,
    },
  };
}

"use server";

import { redirect } from "next/navigation";
import { confirmWaitlistEntry } from "../services/confirm-waitlist";
import { sendWaitlistNotification } from "../services/send-waitlist-notification";

export async function confirmWaitlistAction(formData: FormData) {
  const token = formData.get("token");
  let destination = "/waitlist/confirm?status=error";

  try {
    const result = await confirmWaitlistEntry(token);

    if (result.status === "confirmed") {
      try {
        await sendWaitlistNotification(result.entry);
      } catch (error) {
        console.error("Could not send waitlist notification", error);
      }
    }

    destination = `/waitlist/confirm?status=${result.status}`;
  } catch {
    const params = new URLSearchParams({ status: "error" });
    if (typeof token === "string") params.set("token", token);
    destination = `/waitlist/confirm?${params.toString()}`;
  }

  redirect(destination);
}

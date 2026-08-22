import type { Metadata } from "next";
import { WaitlistConfirmationPage } from "@/features/waitlist/waitlist-confirmation-page";

export const metadata: Metadata = {
  title: "Confirm Your Email | TekGlove",
  description: "Confirm your email address for the TekGlove waitlist.",
  robots: {
    index: false,
    follow: false,
  },
};

type ConfirmationRouteProps = {
  searchParams: Promise<{
    status?: string;
    token?: string;
  }>;
};

export default async function ConfirmationRoute({
  searchParams,
}: ConfirmationRouteProps) {
  const { status, token } = await searchParams;

  return <WaitlistConfirmationPage status={status} token={token} />;
}

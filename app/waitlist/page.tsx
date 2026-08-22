import { createPageMetadata } from "@/shared/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Join the TekGlove Early Access List",
  description:
    "Get early access updates for TekGlove and follow the development of the Smart Dorsal Sensor platform and its connected glove ecosystem.",
  path: "/waitlist",
  keywords: [
    "TekGlove early access",
    "TekGlove waitlist",
    "smart glove release",
    "wearable technology launch",
  ],
});

export { default } from "@/features/waitlist/waitlist-page";

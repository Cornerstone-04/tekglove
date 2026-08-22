import { createPageMetadata } from "@/shared/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "About TekGlove and Why the Hand Matters",
  description:
    "Learn how TekGlove evolved from a compact sports sensor into a hand-data platform, and why the hand offers valuable movement, grip, gesture, and response data.",
  path: "/about",
  keywords: [
    "why hand tracking",
    "hand movement data",
    "grip data",
    "gesture data",
    "wearable technology story",
    "Keniye Koroye",
  ],
});

export { default } from "@/features/about/about-page";

import { brand } from "./brand";

export const site = {
  name: brand.name,
  tagline: "The Smart Glove, Reinvented.",
  description:
    "A hand-data platform powered by the Smart Dorsal Sensor, turning movement, grip, gestures, and physical response into useful insight.",
  url: "https://tekglove.co.uk",
  email: "hello@tekglove.co.uk",
  socials: [
    {
      platform: "Instagram",
      username: "@thetekglove",
      href: "https://www.instagram.com/thetekglove",
    },
    {
      platform: "TikTok",
      username: "@thetekglove",
      href: "https://www.tiktok.com/@thetekglove",
    },
  ] as const,
};

import type { Metadata } from "next";
import { site } from "@/content/site";

const socialImage = {
  url: "/images/tekglove_front.png",
  width: 2000,
  height: 2000,
  alt: "TekGlove wearable with the Smart Dorsal Sensor",
};

const brandKeywords = [
  "TekGlove",
  "Tek Glove",
  "Smart Dorsal Sensor",
  "smart glove",
  "hand data platform",
  "wearable sensor technology",
];

type PageMetadata = {
  title: string;
  absoluteTitle?: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export function createPageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  keywords = [],
}: PageMetadata): Metadata {
  const socialTitle = `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: [...brandKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      siteName: site.name,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

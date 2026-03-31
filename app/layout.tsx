import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";
import ScreenLoader from "@/components/ui/screen-loader";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Tek Glove — Recovery, Reinvented.",
    template: "%s | Tek Glove",
  },
  description:
    "Tek Glove is the world's first therapy glove combining EMS, TENS, vibration, and heat in one wearable device. Relieves pain, restores muscle function, and boosts circulation. Designed for arthritis, Parkinson's, carpal tunnel, injury recovery, and daily hand fatigue. Pairs with Smart Watch via Bluetooth. Coming 2026.",
  metadataBase: new URL("https://tekglove.vercel.app"),
  keywords: [
    "Tek Glove",
    "TekGlove",
    "therapy glove",
    "EMS glove",
    "TENS glove",
    "Smart Watch glove",
    "wearable therapy",
    "arthritis glove",
    "recovery glove",
    "Parkinson's wearable",
    "carpal tunnel treatment",
    "smart glove",
    "Tek Athletic",
    "Keniye Koroye",
    "wearable technology UK",
  ],
  authors: [{ name: "Keniye Koroye", url: "https://tekglove.vercel.app" }],
  creator: "Keniye Koroye",
  openGraph: {
    type: "website",
    url: "https://tekglove.vercel.app",
    title: "Tek Glove — Recovery, Reinvented.",
    description:
      "The world's first therapy glove. EMS + TENS + Vibration + Heat in one wearable. Pairs with Smart Watch. Coming 2026.",
    siteName: "Tek Glove",
    images: [
      {
        url: "https://tekglove.vercel.app/images/tekglove-front.jpg",
        width: 1200,
        height: 630,
        alt: "TekGlove — The world's first therapy glove combining EMS, TENS, vibration and heat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tek Glove — Recovery, Reinvented.",
    description:
      "The world's first therapy glove. EMS + TENS + Vibration + Heat in one wearable. Pairs with Smart Watch. Coming 2026.",
    images: ["https://tekglove.vercel.app/images/tekglove-front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>
        <ScreenLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

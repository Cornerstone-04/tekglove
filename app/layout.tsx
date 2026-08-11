import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";
import ScreenLoader from "@/components/ui/screen-loader";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

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
    default: "Tek Glove | Smart Dorsal Sensor",
    template: "%s | Tek Glove",
  },
  description:
    "TekGlove is a hand-data platform powered by the Smart Dorsal Sensor, turning movement, grip, gestures, and physical response into useful insight across six industries.",
  metadataBase: new URL("https://tekglove.vercel.app"),
  keywords: [
    "Tek Glove",
    "TekGlove",
    "Smart Dorsal Sensor",
    "hand data",
    "athletic performance glove",
    "gesture recognition glove",
    "grip force monitoring",
    "wearable sensor platform",
    "KINETIX glove",
    "smart glove",
    "Tek Athletic",
    "Keniye Koroye",
    "wearable technology UK",
    "connected glove",
  ],
  authors: [{ name: "Keniye Koroye", url: "https://tekglove.vercel.app" }],
  creator: "Keniye Koroye",
  openGraph: {
    type: "website",
    url: "https://tekglove.vercel.app",
    title: "Tek Glove | Your Smart Glove, Reinvented.",
    description:
      "The Smart Dorsal Sensor turns movement, grip, gestures, and physical response into useful hand-data insight.",
    siteName: "Tek Glove",
    images: [
      {
        url: "https://tekglove.vercel.app/images/tekglove_front.png",
        width: 1200,
        height: 630,
        alt: "TekGlove wearable with Smart Dorsal Sensor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tek Glove | Your Smart Glove, Reinvented.",
    description:
      "A hand-data platform powered by the Smart Dorsal Sensor across sport, health, recovery, defence, computing, and industry.",
    images: ["https://tekglove.vercel.app/images/tekglove_front.png"],
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
        <ScrollToTop />
      </body>
    </html>
  );
}

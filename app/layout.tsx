import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/components/layout/navbar";
import Footer from "@/shared/components/layout/footer";
import { Barlow_Condensed, Inter, DM_Mono } from "next/font/google";
import SplashScreen from "@/shared/components/ui/splash-screen";
import { ScrollToTop } from "@/shared/components/ui/scroll-to-top";
import { site } from "@/content/site";

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
  metadataBase: new URL(site.url),
  applicationName: "TekGlove",
  title: {
    default: "TekGlove | Your Smart Glove, Reinvented.",
    template: "%s | Tek Glove",
  },
  description: site.description,
  authors: [{ name: "Keniye B. Koroye" }],
  creator: "Keniye Koroye",
  publisher: "TekGlove",
  category: "Wearable Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/tekglove_icon.png",
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SplashScreen />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

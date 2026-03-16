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
  title: { default: "Tek Glove", template: "%s | Tek Glove" },
  description:
    "Tek Glove — Your Apple Watch, reinvented. The world's first smart glove with integrated Apple Watch mount. Based in the UK.",
  metadataBase: new URL("https://Tek Glove.co.uk"),
  openGraph: {
    title: "Tek Glove",
    description: "Your Apple Watch, reinvented.",
    siteName: "Tek Glove",
    images: [{ url: "/Tek Glove_icon.png" }],
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

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "TekGlove", template: "%s | TekGlove" },
  description: "TekGlove — Your Apple Watch, reinvented. The world's first smart glove with integrated Apple Watch mount. Based in the UK.",
  metadataBase: new URL("https://tekglove.co.uk"),
  openGraph: {
    title: "TekGlove",
    description: "Your Apple Watch, reinvented.",
    siteName: "TekGlove",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

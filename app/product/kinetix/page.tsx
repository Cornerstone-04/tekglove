import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kinetix Movement and Performance Glove",
  description:
    "Explore Kinetix, the TekGlove movement and performance wearable for motion tracking, grip sensing, biometrics, connected accessories, and coaching insight.",
  path: "/product/kinetix",
  keywords: [
    "Kinetix glove",
    "performance tracking glove",
    "sports wearable technology",
    "grip force monitoring",
    "motion tracking glove",
  ],
});

export default function KinetixPage() {
  return <ProductPage productName="Kinetix" />;
}

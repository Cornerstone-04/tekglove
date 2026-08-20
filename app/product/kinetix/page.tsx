import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";

export const metadata = createPageMetadata({
  title: "Kinetix Performance and Training Glove",
  description:
    "Explore Kinetix, the TekGlove performance wearable for motion tracking, grip sensing, biometric monitoring, coaching insights, and injury awareness.",
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

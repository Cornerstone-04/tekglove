import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";

export const metadata = createPageMetadata({
  title: "Kradle Maternal and Health Monitoring Glove",
  description:
    "Explore Kradle, the TekGlove maternal and healthcare wearable for fetal heartbeat detection, maternal monitoring, emergency alerts, and connected care.",
  path: "/product/kradle",
  keywords: [
    "Kradle glove",
    "maternal health wearable",
    "fetal heartbeat monitoring",
    "pregnancy monitoring technology",
    "telemedicine glove",
  ],
});

export default function KradlePage() {
  return <ProductPage productName="Kradle" />;
}

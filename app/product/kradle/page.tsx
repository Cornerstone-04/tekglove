import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kradle Maternal and Health Monitoring Glove",
  description:
    "Explore Kradle, the Smart Dorsal Sensor powered maternal health glove with Doppler sensing, pregnancy monitoring, alerts, and connected care.",
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

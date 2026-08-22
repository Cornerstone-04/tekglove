import { createPageMetadata } from "@/shared/seo/metadata";
import ProductPage from "@/features/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kursor Gesture Control and Computer Interaction Glove",
  description:
    "Explore Kursor, the Smart Dorsal Sensor powered wearable mouse for cursor control, clicking, scrolling, presentations, and accessible computing.",
  path: "/product/kursor",
  keywords: [
    "Kursor glove",
    "gesture control glove",
    "air mouse glove",
    "accessible computer input",
    "AR VR navigation glove",
  ],
});

export default function KursorPage() {
  return <ProductPage productName="Kursor" />;
}

import { createPageMetadata } from "@/shared/seo/metadata";
import ProductDetailPage from "@/features/product/product-detail-page";

export const metadata = createPageMetadata({
  title: "Kursor Gesture Control and Computer Interaction Glove",
  description:
    "Explore Kursor, the TekGlove human-computer interaction wearable for cursor control, presentations, AR and VR navigation, voice commands, and haptic feedback.",
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
  return <ProductDetailPage productName="Kursor" />;
}

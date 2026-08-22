import { productFaqs } from "@/content/faqs";
import { FaqSection } from "@/shared/components/ui/faq-section";
import type { PublishedProductName } from "../product-detail-types";

export function ProductFaq({
  productName,
}: {
  productName: PublishedProductName;
}) {
  return (
    <FaqSection
      eyebrow={`${productName} Questions`}
      title={`Understanding`}
      titleAccent={`${productName}.`}
      items={productFaqs[productName]}
    />
  );
}

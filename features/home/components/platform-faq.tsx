import { platformFaqs } from "@/content/faqs";
import { FaqSection } from "@/shared/components/ui/faq-section";

export function PlatformFaq() {
  return (
    <FaqSection
      title="Questions,"
      titleAccent="Answered."
      introduction="A clearer look at the platform, the hand, and where TekGlove is in its development journey."
      items={platformFaqs}
    />
  );
}

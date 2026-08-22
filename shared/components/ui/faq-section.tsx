import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faqs";

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  titleAccent: string;
  introduction?: string;
  items: FaqItem[];
};

export function FaqSection({
  eyebrow = "Frequently Asked Questions",
  title,
  titleAccent,
  introduction,
  items,
}: FaqSectionProps) {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="section-kicker mb-5">{eyebrow}</p>
          <h2 className="display-title max-w-[11ch] text-[clamp(2.8rem,6vw,5.5rem)] text-white">
            {title}
            <br />
            <span className="text-orange">{titleAccent}</span>
          </h2>
          {introduction ? (
            <p className="copy-secondary mt-6 max-w-[44ch] text-sm leading-[1.8]">
              {introduction}
            </p>
          ) : null}
        </div>

        <div className="border-t border-white/12">
          {items.map((item) => (
            <details
              key={item.question}
              name="tekglove-faq"
              className="group border-b border-white/12"
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-heading text-lg font-semibold tracking-[-0.025em] text-white transition-colors duration-200 ease-linear marker:content-none hover:text-orange sm:text-xl [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-[border-color,color,transform] duration-300 ease-linear group-open:rotate-180 group-open:border-orange/50 group-open:text-orange group-hover:border-orange/40 group-hover:text-orange">
                  <ChevronDown size={17} aria-hidden="true" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-linear group-open:grid-rows-[1fr] motion-reduce:transition-none">
                <div className="overflow-hidden">
                  <p className="copy-secondary max-w-[68ch] pr-12 pb-7 text-sm leading-[1.85] sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ProductDetailConfig } from "../product-detail-types";

export function ProductSpecifications({
  specifications,
}: Pick<ProductDetailConfig, "specifications">) {
  return (
    <section
      id="specifications"
      className="scroll-mt-20 border-b border-white/10 px-6 py-12 md:px-12"
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {specifications.map((specification) => (
          <div key={specification.label} className="bg-[#080809] px-5 py-6">
            <p className="mb-2 font-mono text-xs tracking-[0.06em] text-orange">
              {specification.label}
            </p>
            <p className="text-sm leading-relaxed text-white/78">
              {specification.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

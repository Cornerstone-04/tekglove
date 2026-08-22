import { BsCheck2 } from "react-icons/bs";
import { ecosystemProducts, type ProductAccent } from "@/content/products";
import { toggleProductInterest } from "../utils/product-interest";

const accentClasses: Record<
  ProductAccent,
  { dot: string; selected: string; glow: string }
> = {
  kradle: {
    dot: "bg-kradle-500",
    selected: "border-kradle-500/70 bg-kradle-500/10",
    glow: "shadow-[0_0_18px_var(--color-kradle-500)]",
  },
  kinetix: {
    dot: "bg-kinetix-500",
    selected: "border-kinetix-500/70 bg-kinetix-500/10",
    glow: "shadow-[0_0_18px_var(--color-kinetix-500)]",
  },
  kursor: {
    dot: "bg-kursor-600",
    selected: "border-kursor-600/70 bg-kursor-600/10",
    glow: "shadow-[0_0_18px_var(--color-kursor-600)]",
  },
  kovert: {
    dot: "bg-kovert-500",
    selected: "border-kovert-500/70 bg-kovert-500/10",
    glow: "shadow-[0_0_18px_var(--color-kovert-500)]",
  },
  kapture: {
    dot: "bg-kapture-600",
    selected: "border-kapture-600/70 bg-kapture-600/10",
    glow: "shadow-[0_0_18px_var(--color-kapture-600)]",
  },
  konnect: {
    dot: "bg-konnect-500",
    selected: "border-konnect-500/70 bg-konnect-500/10",
    glow: "shadow-[0_0_18px_var(--color-konnect-500)]",
  },
};

type ProductInterestGridProps = {
  selected: ProductAccent[];
  onChange: (products: ProductAccent[]) => void;
  invalid?: boolean;
};

export function ProductInterestGrid({
  selected,
  onChange,
  invalid = false,
}: ProductInterestGridProps) {
  return (
    <fieldset aria-describedby={invalid ? "product-interest-error" : undefined}>
      <legend className="mb-2 text-sm font-medium text-white">
        Which gloves are you interested in?{" "}
        <span className="text-orange" aria-hidden="true">
          *
        </span>
        <span className="sr-only">Required</span>
      </legend>
      <p className="mb-4 text-sm leading-relaxed text-white/45">
        Choose as many as you like.
      </p>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {ecosystemProducts.map((product) => {
          const isSelected = selected.includes(product.slug);
          const accent = accentClasses[product.slug];

          return (
            <label
              key={product.slug}
              className={`pressable group relative flex min-h-18 cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-3 transition-[border-color,background-color,transform] duration-200 ${
                isSelected
                  ? accent.selected
                  : "border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <input
                type="checkbox"
                name="productInterest"
                value={product.slug}
                checked={isSelected}
                onChange={() =>
                  onChange(toggleProductInterest(selected, product.slug))
                }
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-1 h-2 w-2 shrink-0 rounded-full ${accent.dot} ${isSelected ? accent.glow : "opacity-65"}`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">
                  {product.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-white/45">
                  {product.category}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isSelected
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-transparent"
                }`}
              >
                <BsCheck2 className="text-sm" />
              </span>
            </label>
          );
        })}
      </div>

      {invalid && (
        <p
          id="product-interest-error"
          role="alert"
          className="mt-3 text-sm text-orange"
        >
          Select at least one glove to continue.
        </p>
      )}
    </fieldset>
  );
}

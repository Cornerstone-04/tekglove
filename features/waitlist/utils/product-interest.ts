import type { ProductAccent } from "@/content/products";

export function toggleProductInterest(
  selected: ProductAccent[],
  product: ProductAccent,
) {
  return selected.includes(product)
    ? selected.filter((item) => item !== product)
    : [...selected, product];
}

import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/content/products";

export type PublishedProductName = "Kradle" | "Kinetix" | "Kursor";

export type ProductVisual = {
  image?: string;
  icon: LucideIcon;
};

export type ProductDetailConfig = {
  name: PublishedProductName;
  accentColor: ProductAccent;
  accentSource: `#${string}`;
  mark: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  introduction: string;
  shader: "sensor" | "intelligence";
  signalLabel: string;
  signalValue: string;
  heroVisual: ProductVisual;
  specifications: Array<{ label: string; value: string }>;
  showcases: Array<
    ProductVisual & {
      kicker: string;
      title: string;
      description: string;
    }
  >;
  intelligence: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    capabilities: Array<{ title: string; description: string }>;
  };
  useCases: {
    kicker: string;
    title: string;
    titleAccent: string;
    items: string[];
  };
  cta: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    visual: ProductVisual;
  };
};

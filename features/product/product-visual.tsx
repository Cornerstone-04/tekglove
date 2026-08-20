import Image from "next/image";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";
import type { ProductVisual as ProductVisualConfig } from "./product-detail-config";

type ProductVisualProps = ProductVisualConfig & {
  delay?: number;
  priority?: boolean;
  imageClassName?: string;
};

export function ProductVisual({
  image,
  icon: Icon,
  delay = 0,
  priority = false,
  imageClassName = "max-w-136",
}: ProductVisualProps) {
  if (image) {
    return (
      <FloatingGlove delay={delay} className="relative z-10 w-full">
        <Image
          src={image}
          alt=""
          width={760}
          height={760}
          className={`h-auto w-full object-contain ${imageClassName}`}
          priority={priority}
        />
      </FloatingGlove>
    );
  }

  return (
    <FloatingGlove delay={delay} className="relative z-10">
      <div className="relative grid size-64 place-items-center sm:size-80">
        <div className="absolute inset-0 rounded-full border border-orange/15 bg-orange/5 shadow-[0_0_110px_rgba(249,115,22,0.12)]" />
        <div className="absolute inset-[18%] rounded-full border border-white/10" />
        <div className="absolute inset-[34%] rounded-full border border-orange/25 bg-black/55 backdrop-blur-xl" />
        <Icon className="relative text-orange" size={72} strokeWidth={1.1} />
      </div>
    </FloatingGlove>
  );
}

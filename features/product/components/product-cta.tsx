"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { revealViewport } from "@/shared/motion/card-reveal";
import type { ProductDetailConfig } from "../product-detail-types";
import { ProductVisual } from "../product-visual";

export function ProductCta({ config }: { config: ProductDetailConfig }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <ShaderBackdrop
        variant="cta-halftone"
        accentColor={config.accentSource}
        className="mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] opacity-80"
      />
      <div className="pointer-events-none absolute top-1/2 right-[8%] h-136 w-136 -translate-y-1/2 rounded-full bg-orange/10 blur-[110px]" />
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
      >
        <div>
          <p className="section-kicker mb-6">{config.cta.kicker}</p>
          <h2 className="display-title mb-6 text-[clamp(2.75rem,6vw,6rem)] text-white">
            {config.cta.title}
            <br />
            <span className="text-orange">{config.cta.titleAccent}</span>
          </h2>
          <p className="copy-secondary mb-10 max-w-[54ch] text-base leading-[1.8]">
            {config.cta.description}
          </p>
          <ButtonLink href="/waitlist" size="lg">
            Join the Waitlist
          </ButtonLink>
        </div>
        <div className="relative flex min-h-80 items-center justify-center sm:min-h-112">
          <div className="absolute inset-[16%] rounded-full bg-orange/10 blur-3xl" />
          <ProductVisual {...config.cta.visual} imageClassName="max-w-152" />
        </div>
      </motion.div>
    </section>
  );
}

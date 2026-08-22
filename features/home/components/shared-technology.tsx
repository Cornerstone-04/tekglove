"use client";

import { brand } from "@/content/brand";
import { ecosystemProducts } from "@/content/products";
import { revealViewport } from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";

export function SharedTechnology() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shared-technology"
      className="relative overflow-hidden border-b border-white/8 bg-surface/35 px-6 py-28 md:px-12 md:py-36"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-3/4 -translate-x-1/2 bg-radial from-orange/8 to-transparent blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="surface-panel relative overflow-hidden"
      >
        <div className="grid gap-8 border-b border-white/10 p-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:p-10 lg:p-12">
          <div>
            <p className="section-kicker mb-4">Shared Technology Stack</p>
            <h2 className="display-title max-w-[10ch] text-[clamp(2.8rem,6vw,5.5rem)] text-white">
              Inside Every
              <br />
              <span className="text-orange">Glove.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="mb-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-white">
              Smart Dorsal Sensor
            </p>
            <p className="copy-secondary max-w-[56ch] text-[0.95rem] leading-[1.85]">
              The shared sensing and intelligence foundation that captures hand
              data and powers every TekGlove product.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3">
          {brand.technologyLayers.map((layer, index) => (
            <div
              key={layer.title}
              className="relative border-b border-white/10 p-8 last:border-b-0 md:p-10 lg:border-r lg:border-b-0 lg:p-12 lg:last:border-r-0"
            >
              {index < brand.technologyLayers.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-12 -right-1.5 z-10 hidden size-3 rotate-45 border-t border-r border-orange/60 bg-surface lg:block"
                />
              )}
              <h3 className="mb-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-white">
                {layer.title}
              </h3>
              <p className="copy-secondary mb-7 max-w-[38ch] text-sm leading-[1.75]">
                {layer.description}
              </p>
              <ul className="space-y-3">
                {layer.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-3 font-mono text-xs leading-relaxed tracking-[0.04em] text-white/72"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-orange" />
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 px-8 py-7 md:px-10 lg:px-12">
          <p className="mb-5 font-mono text-xs tracking-[0.08em] text-white/55">
            Shared across the ecosystem
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {ecosystemProducts.map((product) => (
              <div
                key={product.name}
                data-product-accent={product.accentColor}
                className="product-accent flex items-center gap-2.5 font-brand text-lg font-bold tracking-[0.02em] text-white/82"
              >
                <span className="size-2 rounded-full bg-orange" />
                {product.mark}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

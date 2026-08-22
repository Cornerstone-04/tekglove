"use client";

import { ecosystemProducts } from "@/content/products";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  Cog,
  Crosshair,
  MousePointer2,
  Shield,
  Zap,
} from "lucide-react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { ButtonLink } from "@/shared/components/ui/button";

const icons = {
  Kinetix: Crosshair,
  Kradle: Activity,
  Kursor: MousePointer2,
  Kovert: Shield,
  Kapture: Zap,
  Konnect: Cog,
} as const;

export function Ecosystem() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden border-b border-white/8 py-28 md:py-36"
    >
      <ShaderBackdrop
        variant="ecosystem"
        className="mask-[linear-gradient(to_bottom,black,transparent_62%)] opacity-18"
      />
      <div className="relative z-10 w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-16 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">The TekGlove Ecosystem</p>
            <h2 className="display-title max-w-4xl text-[clamp(3rem,7vw,6rem)] text-white">
              One Platform.
              <br />
              <span className="text-orange">Endless Possibilities.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[52ch] font-sans text-[0.95rem] leading-[1.85] md:pb-2">
            Six specialized gloves interpret hand data for six distinct fields.
            Each is powered by the Smart Dorsal Sensor and extended through
            purpose-built modules and connected accessories.
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-5 lg:grid-cols-3"
        >
          {ecosystemProducts.map((product, index) => {
            const productName = product.name as keyof typeof icons;
            const Icon = icons[productName];
            return (
              <motion.article
                key={product.name}
                data-product-accent={product.accentColor}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel product-accent group relative flex min-h-full flex-col overflow-hidden p-8 transition-colors duration-500 hover:bg-surface-raised md:p-10"
              >
                <div className="relative z-10 mb-10 flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/12 text-orange ring-1 ring-orange/25 ring-inset">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="mb-3 font-mono text-xs tracking-[0.08em] text-orange">
                    {product.accent}
                  </p>
                  <h3 className="font-brand text-4xl font-black tracking-[0.01em] text-white">
                    {product.mark}
                  </h3>
                  <p className="copy-secondary mt-2 min-h-10 font-sans text-sm leading-relaxed">
                    {product.category}
                  </p>
                </div>

                <div className="relative z-10 my-8 h-px bg-white/10" />

                <p className="relative z-10 mb-4 font-mono text-xs tracking-[0.08em] text-white/60">
                  Key capabilities
                </p>
                <ul className="relative z-10 mb-9 space-y-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 font-sans text-sm leading-relaxed text-white/78"
                    >
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 bg-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto">
                  <p className="mb-3 font-mono text-xs tracking-[0.08em] text-white/60">
                    Built for
                  </p>
                  <p className="copy-secondary mb-8 font-sans text-sm leading-[1.75]">
                    {product.users.join(" · ")}
                  </p>
                  <div className="border-l-2 border-orange pl-4">
                    <p className="font-sans text-sm leading-relaxed font-medium text-white/85">
                      {product.value}
                    </p>
                  </div>
                  {product.href && (
                    <ButtonLink
                      href={product.href}
                      variant="secondary"
                      size="sm"
                      className="mt-7"
                    >
                      Explore {product.name}
                    </ButtonLink>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

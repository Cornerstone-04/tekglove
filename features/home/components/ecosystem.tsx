"use client";

import { ecosystemProducts, sharedTechnology } from "@/content/site";
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
import Image from "next/image";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";

const icons = {
  Kinetix: Crosshair,
  Kradle: Activity,
  Kursor: MousePointer2,
  Kovert: Shield,
  Kapture: Zap,
  Konnect: Cog,
} as const;

const desktopOrder = {
  Kinetix: "lg:order-2",
  Kradle: "lg:order-1",
  Kursor: "lg:order-3",
  Kovert: "lg:order-4",
  Kapture: "lg:order-5",
  Konnect: "lg:order-6",
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
        className="opacity-18 mask-[linear-gradient(to_bottom,black,transparent_62%)]"
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
            Six specialized gloves interpret hand data for six distinct fields,
            all powered by the same sensor, intelligence, connectivity, and
            wearable platform.
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
            const isFlagship = product.name === "Kinetix";
            return (
              <motion.article
                key={product.name}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className={`surface-panel group relative flex min-h-full flex-col overflow-hidden p-8 transition-colors duration-500 hover:bg-surface-raised md:p-10 ${
                  desktopOrder[productName]
                } ${
                  isFlagship
                    ? "border-orange/60 shadow-[0_0_48px_rgba(249,115,22,0.13)] ring-1 ring-inset ring-orange/25"
                    : ""
                }`}
              >
                {product.image && (
                  <div
                    aria-hidden="true"
                    className="ecosystem-render-stage pointer-events-none absolute -right-20 -top-16 h-100 w-100 opacity-30"
                  >
                    <FloatingGlove
                      delay={index * 0.35}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        className="object-contain"
                      />
                    </FloatingGlove>
                  </div>
                )}
                {product.image && (
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/5 via-black/55 to-black/95" />
                )}

                <div className="relative z-10 mb-10 flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/12 text-orange ring-1 ring-inset ring-orange/25">
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
                  Core capabilities
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
                    <p className="font-sans text-sm font-medium leading-relaxed text-white/85">
                      {product.value}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="surface-panel mt-5 px-8 py-10 md:px-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr] md:items-center">
            <div>
              <p className="section-kicker mb-3">Shared technology stack</p>
              <h3 className="font-heading text-3xl font-semibold tracking-[-0.035em] text-white">
                The TekGlove Core
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {sharedTechnology.map((technology) => (
                <div
                  key={technology}
                  className="flex min-h-20 items-center rounded-xl bg-black/45 px-4 py-5 font-mono text-xs leading-relaxed tracking-[0.04em] text-white/72"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

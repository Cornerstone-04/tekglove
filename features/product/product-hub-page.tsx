"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  Cog,
  Crosshair,
  MousePointer2,
  Shield,
  Zap,
} from "lucide-react";
import { ecosystemProducts, sharedTechnology } from "@/content/site";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";

const icons = {
  Kinetix: Crosshair,
  Kradle: Activity,
  Kursor: MousePointer2,
  Kovert: Shield,
  Kapture: Zap,
  Konnect: Cog,
} as const;

export default function ProductHubPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-bg pt-16">
      <section className="hero-texture relative flex min-h-[calc(88svh-4rem)] items-center overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <ShaderBackdrop
          variant="intelligence"
          className="mask-[radial-gradient(circle_at_68%_45%,black,transparent_62%)] opacity-28"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-40 bg-linear-to-b from-transparent to-bg" />

        <div className="relative z-10 grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="section-kicker mb-6"
            >
              The TekGlove Product Family
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.65,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="display-title max-w-[10ch] text-[clamp(4rem,9vw,8.5rem)] text-white"
            >
              Six Gloves.
              <br />
              <span className="text-orange">One Platform.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.55,
              delay: reduceMotion ? 0 : 0.14,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="lg:pb-3"
          >
            <p className="copy-secondary max-w-[54ch] text-base leading-[1.85]">
              Healthcare, performance, interaction, defence, recovery, and
              industry are powered by the same hand-data intelligence,
              connectivity, and wearable foundation.
            </p>
            <ButtonLink
              href="#product-family"
              variant="secondary"
              className="mt-8"
            >
              Explore the Family
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <section
        id="product-family"
        className="scroll-mt-20 border-b border-white/10 px-6 py-24 md:px-12 md:py-32"
      >
        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-5 lg:grid-cols-3"
        >
          {ecosystemProducts.map((product, index) => {
            const Icon = icons[product.name as keyof typeof icons];

            return (
              <motion.article
                key={product.name}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel flex min-h-full flex-col p-8 md:p-10"
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-orange/12 text-orange ring-1 ring-orange/25 ring-inset">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.08em] text-white/55">
                    {product.href ? "Explore now" : "In development"}
                  </span>
                </div>

                <p className="mb-3 font-mono text-xs tracking-[0.08em] text-orange">
                  {product.accent}
                </p>
                <h2 className="font-brand text-4xl font-black tracking-[0.01em] text-white">
                  {product.mark}
                </h2>
                <p className="copy-secondary mt-3 text-sm leading-relaxed">
                  {product.category}
                </p>
                <p className="mt-7 text-sm leading-[1.8] text-white/78">
                  {product.value}
                </p>

                <div className="mt-auto pt-9">
                  {product.href ? (
                    <ButtonLink
                      href={product.href}
                      variant="secondary"
                      size="sm"
                    >
                      Explore {product.name}
                    </ButtonLink>
                  ) : (
                    <span className="font-mono text-xs tracking-[0.06em] text-white/48">
                      Dedicated product page coming later
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/8 blur-[110px]" />
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="section-kicker mb-6">Shared Intelligence</p>
          <h2 className="display-title text-[clamp(3rem,7vw,6.5rem)] text-white">
            One Core Architecture.
            <br />
            <span className="text-orange">Many Possibilities.</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {sharedTechnology.map((technology) => (
              <div
                key={technology}
                className="surface-panel flex min-h-20 items-center justify-center px-4 py-5 font-mono text-xs leading-relaxed tracking-[0.04em] text-white/72"
              >
                {technology}
              </div>
            ))}
          </div>
          <ButtonLink href="/waitlist" size="lg" className="mx-auto mt-12">
            Get Early Access
          </ButtonLink>
        </motion.div>
      </section>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { Activity, MousePointer2 } from "lucide-react";
import { ecosystemProducts, sharedTechnology } from "@/content/site";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";

type PublishedProductName = "Kradle" | "Kursor";

const pageConfig = {
  Kradle: {
    icon: Activity,
    shader: "sensor" as const,
    headline: "Connected Care, Held Close.",
    introduction:
      "Kradle brings maternal and healthcare signals closer to the people who need them, supporting monitoring, early awareness, and more connected care through the hand.",
    capabilityHeading: "Important Signals. Easier to Reach.",
    audienceHeading: "Designed Around Maternal Care.",
    ctaHeading: "Help Shape the Future of Connected Care.",
    ctaCopy:
      "Join the TekGlove early access list for Kradle development updates, collaboration opportunities, and future availability.",
  },
  Kursor: {
    icon: MousePointer2,
    shader: "intelligence" as const,
    headline: "Your Hand Becomes the Interface.",
    introduction:
      "Kursor translates natural hand movement, gestures, and commands into intuitive control across computers, presentations, connected displays, and immersive environments.",
    capabilityHeading: "Move, Point, Control, and Create.",
    audienceHeading: "Built for the Way People Work.",
    ctaHeading: "Experience a More Natural Interface.",
    ctaCopy:
      "Join the TekGlove early access list for Kursor development updates, testing opportunities, and future availability.",
  },
} satisfies Record<
  PublishedProductName,
  {
    icon: typeof Activity;
    shader: "sensor" | "intelligence";
    headline: string;
    introduction: string;
    capabilityHeading: string;
    audienceHeading: string;
    ctaHeading: string;
    ctaCopy: string;
  }
>;

export default function ProductDetailPage({
  productName,
}: {
  productName: PublishedProductName;
}) {
  const reduceMotion = useReducedMotion();
  const product = ecosystemProducts.find(({ name }) => name === productName);
  const config = pageConfig[productName];
  const Icon = config.icon;

  if (!product) return null;

  return (
    <div className="bg-bg pt-16">
      <section className="hero-texture relative flex min-h-[calc(92svh-4rem)] items-center overflow-hidden px-6 py-20 md:px-12 md:py-28">
        <ShaderBackdrop
          variant={config.shader}
          className="mask-[radial-gradient(circle_at_72%_48%,black,transparent_60%)] opacity-30"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-40 bg-linear-to-b from-transparent to-bg" />

        <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
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
              {product.mark} · {product.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.65,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="display-title mb-8 max-w-[10ch] text-[clamp(3.8rem,8vw,8rem)] text-white"
            >
              {config.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.55,
                delay: reduceMotion ? 0 : 0.14,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="copy-secondary mb-10 max-w-[58ch] text-base leading-[1.85]"
            >
              {config.introduction}
            </motion.p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/waitlist">Get Early Access</ButtonLink>
              <ButtonLink href="/product" variant="secondary" arrow="left">
                All Products
              </ButtonLink>
            </div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              transform: reduceMotion ? "scale(1)" : "scale(0.94)",
            }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.7,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative flex min-h-88 items-center justify-center sm:min-h-112 lg:min-h-136"
            aria-hidden="true"
          >
            <div className="absolute size-[76%] rounded-full border border-orange/15 bg-orange/6 shadow-[0_0_110px_rgba(249,115,22,0.12)]" />
            <div className="absolute size-[58%] rounded-full border border-white/10" />
            <div className="absolute size-[38%] rounded-full border border-orange/25 bg-black/45 backdrop-blur-xl" />
            <Icon className="relative text-orange" size={88} strokeWidth={1} />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <p className="section-kicker mb-5">Core Capabilities</p>
            <h2 className="display-title text-[clamp(3rem,6vw,5.5rem)] text-white">
              {config.capabilityHeading}
            </h2>
          </motion.div>
          <p className="copy-secondary max-w-[54ch] text-sm leading-[1.85] md:pb-1">
            Six focused capabilities built on the shared TekGlove sensor,
            intelligence, connectivity, and wearable platform.
          </p>
        </div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {product.features.map((feature, index) => (
            <motion.article
              key={feature}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel flex min-h-40 items-end p-7 md:p-8"
            >
              <h3 className="max-w-[24ch] font-heading text-xl leading-snug font-semibold tracking-[-0.03em] text-white">
                {feature}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <p className="section-kicker mb-5">Built For</p>
            <h2 className="display-title text-[clamp(3rem,6vw,5.5rem)] text-white">
              {config.audienceHeading}
            </h2>
          </motion.div>

          <motion.div
            custom={reduceMotion}
            variants={staggeredCardGroup}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-2 gap-3"
          >
            {product.users.map((user, index) => (
              <motion.div
                key={user}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel flex min-h-28 items-end p-6"
              >
                <span className="font-heading text-lg font-semibold tracking-[-0.025em] text-white">
                  {user}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="surface-panel relative overflow-hidden px-7 py-14 sm:px-12 md:py-20"
        >
          <ShaderBackdrop
            variant={config.shader}
            className="mask-[radial-gradient(circle_at_80%_50%,black,transparent_58%)] opacity-18"
          />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="section-kicker mb-5">{product.mark} Early Access</p>
              <h2 className="display-title mb-6 max-w-[12ch] text-[clamp(3rem,6vw,5.5rem)] text-white">
                {config.ctaHeading}
              </h2>
              <p className="copy-secondary max-w-[56ch] text-base leading-[1.8]">
                {config.ctaCopy}
              </p>
            </div>
            <div className="lg:text-right">
              <ButtonLink href="/waitlist" size="lg">
                Join the Waitlist
              </ButtonLink>
            </div>
          </div>
          <div className="relative z-10 mt-14 grid grid-cols-2 gap-2 border-t border-white/10 pt-8 sm:grid-cols-4">
            {sharedTechnology.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="font-mono text-xs leading-relaxed tracking-[0.04em] text-white/58"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

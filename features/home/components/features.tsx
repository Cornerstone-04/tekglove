"use client";

import { features } from "@/content/site";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/shared/components/ui/button";

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/8 py-28 md:py-36">
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 max-w-4xl"
        >
          <p className="section-kicker mb-5">Built Around the Hand</p>
          <h2 className="display-title text-[clamp(2.75rem,6vw,5.5rem)] text-white">
            The Body&apos;s Natural Interface.
          </h2>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, index) => (
            <motion.div
              key={f.id}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel group relative overflow-hidden p-8 md:p-9"
            >
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="mb-3 font-heading text-[1.25rem] font-semibold tracking-[-0.025em] text-white">
                {f.title}
              </h3>
              <p className="copy-secondary font-sans text-[0.9rem] leading-[1.75]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="copy-secondary max-w-[52ch] text-sm leading-[1.75]">
            Discover how a compact sports sensor evolved into a platform built
            around the hand.
          </p>
          <ButtonLink href="/about" variant="secondary">
            Explore Our Story
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}

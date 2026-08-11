"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { athleticUseCases, features, specs } from "@/content/site";
import {
  alternatingCardReveal,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";

export default function ProductPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="bg-bg pt-16">
      {/* Header */}
      <div
        ref={heroRef}
        className="border-b border-white/10 px-6 pt-20 pb-16 md:px-12"
      >
        <motion.div style={{ opacity: heroOpacity }} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="section-kicker mb-5"
          >
            The Flagship
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              delay: reduceMotion ? 0 : 0.05,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="display-title text-[clamp(3rem,9vw,7rem)] text-white"
          >
            TekGlove V1
          </motion.h1>
        </motion.div>
      </div>

      {/* Main product */}
      <section className="border-b border-white/10 pb-12 md:pb-24">
        <div className="grid w-full grid-cols-1 gap-0 px-6 md:grid-cols-2 md:px-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="surface-panel flex items-center justify-center overflow-hidden px-8 py-16"
          >
            <div className="relative">
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/20 blur-3xl rounded-full pointer-events-none" />
              <Image
                src="/images/tekglove_front_cutout.png"
                alt="Tek Glove with Smart Sensor"
                width={520}
                height={520}
                className="object-contain max-w-full relative z-10"
                priority
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="px-4 py-16 md:px-12"
          >
            <div className="section-kicker mb-5">
              Flagship · KINETIX™
            </div>

            <h2 className="mb-5 font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
              Hand Data for Athletes
            </h2>

            <p className="copy-secondary mb-10 font-sans text-[0.98rem] leading-[1.8]">
              TekGlove V1 is the athletic expression of the TekGlove platform.
              Its Smart Dorsal Sensor captures movement, grip, gestures, and
              hand position, turning every session into useful performance data
              without restricting how an athlete moves.
            </p>

            {/* Specs */}
            <div className="mb-10">
              <div className="mb-4 font-mono text-xs tracking-[0.08em] text-white/60">
                Specifications
              </div>

              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between border-b border-white/10 py-[0.65rem]"
                >
                  <span className="font-mono text-left text-xs tracking-[0.06em] text-orange">
                    {s.label}
                  </span>
                  <span className="font-sans text-right text-sm text-white/80">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/waitlist"
                className="pressable inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-[opacity,transform] duration-200 hover:opacity-90"
              >
                Get Early Access →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hand-first performance */}
      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">
              Hand-First Performance
            </p>
            <h2 className="display-title text-[clamp(2.8rem,6vw,5rem)] text-white">
              The Hand Holds
              <br />
              <span className="text-orange">Actionable Data.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
            Every movement, grip, gesture, and physical response contains
            information. TekGlove captures that information at the hand and
            transforms it into insight athletes can use.
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel p-8"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="copy-secondary text-sm leading-[1.8]">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Use cases */}
      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <p className="section-kicker mb-5">
              Athletic Use Cases
            </p>
            <h2 className="display-title text-[clamp(2.5rem,5vw,4.5rem)] text-white">
              Built to Measure
              <br />
              <span className="text-orange">How You Perform.</span>
            </h2>
          </motion.div>
          <motion.div
            custom={reduceMotion}
            variants={staggeredCardGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 lg:grid-cols-3"
          >
            {athleticUseCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel flex min-h-28 items-end p-6"
              >
                <div>
                  <span className="font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                    {useCase}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

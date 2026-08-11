"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { athleticUseCases, features, specs } from "@/lib/data";

export default function ProductPage() {
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-[0.6rem] normal-case tracking-[0.3em] text-orange"
          >
            The Flagship
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white"
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center border-r border-white/10 bg-surface px-8 py-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              className="relative"
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/20 blur-3xl rounded-full pointer-events-none" />
              <Image
                src="/images/tekglove_front_cutout.png"
                alt="Tek Glove with Smart Sensor"
                width={520}
                height={520}
                className="object-contain max-w-full relative z-10"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4 md:px-12 py-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 font-mono text-[0.58rem] normal-case tracking-[0.2em] text-orange"
            >
              Flagship · KINETIX™
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white"
            >
              Hand Data for Athletes
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 font-sans text-[0.9rem] leading-[1.8] text-white/50"
            >
              TekGlove V1 is the athletic expression of the TekGlove platform.
              Its Smart Dorsal Sensor captures movement, grip, gestures, and
              hand position, turning every session into useful performance data
              without restricting how an athlete moves.
            </motion.p>

            {/* Specs */}
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/25"
              >
                Specifications
              </motion.div>

              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center justify-between border-b border-white/10 py-[0.65rem]"
                >
                  <span className="font-mono text-left text-[0.65rem] uppercase tracking-widest text-orange">
                    {s.label}
                  </span>
                  <span className="font-sans text-right text-[0.78rem] text-white/70">
                    {s.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex justify-center md:justify-start"
            >
              <Link
                href="/waitlist"
                className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90"
              >
                Get Early Access →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hand-first performance */}
      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange">
              Hand-First Performance
            </p>
            <h2 className="font-heading text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.92] uppercase text-white">
              The Hand Holds
              <br />
              <span className="text-orange">Actionable Data.</span>
            </h2>
          </div>
          <p className="max-w-[58ch] text-sm leading-[1.9] text-white/50 md:pb-1">
            Every movement, grip, gesture, and physical response contains
            information. TekGlove captures that information at the hand and
            transforms it into insight athletes can use.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-surface p-8"
            >
              <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-[1.8] text-white/45">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange">
              Athletic Use Cases
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase text-white">
              Built to Measure
              <br />
              <span className="text-orange">How You Perform.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-3">
            {athleticUseCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex min-h-28 items-end bg-bg p-6"
              >
                <div>
                  <span className="font-heading text-2xl font-bold uppercase text-white">
                    {useCase}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { products, specs } from "@/lib/data";

export default function ProductPage() {
  return (
    <div className="bg-bg pt-16">
      {/* Header */}
      <div className="border-b border-white/10 px-6 pt-20 pb-16 md:px-10">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
          >
            The Collection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white"
          >
            TekGlove
          </motion.h1>
        </div>
      </div>

      {/* Main product — hero layout */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-2 md:px-12">
          {/* Image */}
          <div className="flex items-center justify-center border-r border-white/10 bg-surface px-8 py-16">
            <Image
              src="/images/tekglove_front_cutout.png"
              alt="TekGlove Standard"
              width={480}
              height={480}
              className="max-w-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="px-12 py-16">
            <div className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-orange">
              Flagship
            </div>

            <h2 className="mb-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white">
              TekGlove Standard
            </h2>

            <p className="mb-10 font-sans text-[0.9rem] leading-[1.8] text-white/50">
              The original TekGlove. A lightweight, high-performance glove
              engineered with a precision-fit Apple Watch mount on the back of
              the hand. Built for athletes, adventurers, and professionals who
              need their data without reaching for their wrist.
            </p>

            {/* Specs */}
            <div className="mb-10">
              <div className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/25">
                Specifications
              </div>

              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between border-b border-white/10 py-[0.65rem]"
                >
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/30">
                    {s.label}
                  </span>

                  <span className="font-sans text-[0.78rem] text-white/70">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/signup"
              className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* Second product — angle view */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-2 md:px-12">
          {/* Details — reversed */}
          <div className="border-r border-white/10 px-12 py-16">
            <div className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-orange">
              Winter Edition
            </div>

            <h2 className="mb-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white">
              TekGlove Winter
            </h2>

            <p className="mb-10 font-sans text-[0.9rem] leading-[1.8] text-white/50">
              All the power of the Standard, built for cold weather. Thermal
              insulation keeps your hands warm in harsh conditions while every
              feature of your Apple Watch remains fully accessible.
            </p>

            <Link
              href="/signup"
              className="inline-block border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center bg-surface px-8 py-16">
            <Image
              src="/images/tekglove_angle_cutout.png"
              alt="TekGlove Winter"
              width={480}
              height={480}
              className="max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="mb-12 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/25">
            Full Catalogue
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-col md:grid-cols-3">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface p-8"
              >
                <div className="relative mb-6 aspect-square overflow-hidden bg-black">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute top-3 left-3 bg-orange px-2 py-[0.2rem] font-mono text-[0.55rem] uppercase tracking-[0.15em] text-black">
                    {p.tag}
                  </div>
                </div>

                <h3 className="mb-2 font-heading text-[1.3rem] font-bold uppercase text-white">
                  {p.name}
                </h3>

                <p className="font-sans text-[0.75rem] leading-[1.7] text-white/40">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

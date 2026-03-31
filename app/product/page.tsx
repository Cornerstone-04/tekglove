"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { specs } from "@/lib/data";

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
            className="mb-4 font-mono text-[0.6rem] normal-case tracking-[0.3em] text-orange"
          >
            The Collection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white"
          >
            Tek Glove
          </motion.h1>
        </div>
      </div>

      {/* Main product */}
      <section className="border-b border-white/10 pb-12 md:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-2 md:px-12">
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
                alt="Tek Glove with Smart Watch Ultra"
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
              Flagship
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white"
            >
              Tek Glove Standard
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 font-sans text-[0.9rem] leading-[1.8] text-white/50"
            >
              The original Tek Glove. A lightweight, high-performance glove
              engineered with a precision-fit Smart Watch mount on the back of
              the hand. Built for athletes, adventurers, and professionals who
              need their data without reaching for their wrist.
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
    </div>
  );
}

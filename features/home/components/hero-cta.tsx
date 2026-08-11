"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function HeroCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-32 text-center">
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <p className="section-kicker mb-6">
            Limited Beta
          </p>
          <h2 className="display-title mb-6 text-[clamp(2.5rem,8vw,6rem)] text-white">
            Be First to
            <br />
            Wear It.
          </h2>
          <p className="copy-secondary mx-auto mb-10 max-w-3xl font-sans text-base leading-[1.8]">
            Sign up for beta testing or early access. Limited spots available.
          </p>
          <Link
            href="/waitlist"
            className="pressable inline-block rounded-full bg-orange px-10 py-4 font-sans text-[0.88rem] font-semibold normal-case tracking-[-0.01em] text-black transition-[opacity,transform] duration-200 hover:opacity-85"
          >
            Get Early Access →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

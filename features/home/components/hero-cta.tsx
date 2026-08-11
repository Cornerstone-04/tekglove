"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/shared/components/ui/button";

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
          <p className="section-kicker mb-6">Limited Beta</p>
          <h2 className="display-title mb-6 text-[clamp(2.5rem,8vw,6rem)] text-white">
            Be First to
            <br />
            Wear It.
          </h2>
          <p className="copy-secondary mx-auto mb-10 max-w-3xl font-sans text-base leading-[1.8]">
            Sign up for beta testing or early access. Limited spots available.
          </p>
          <ButtonLink href="/waitlist" size="lg">
            Get Early Access
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}

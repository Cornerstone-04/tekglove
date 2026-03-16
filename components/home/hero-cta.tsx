import { motion } from "motion/react";
import Link from "next/link";

export function HeroCTA() {
  return (
    <section className="py-32 text-center">
      <div className="px-6 md:px-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6">
            Limited Beta
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] text-white mb-6">
            Be First to
            <br />
            Wear It.
          </h2>
          <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
            Sign up for beta testing or early access. Limited spots available.
          </p>
          <Link
            href="/waitlist"
            className="font-sans font-semibold text-[0.85rem] tracking-[0.08em] uppercase bg-orange text-black px-10 py-4 inline-block transition-opacity duration-200 hover:opacity-85"
          >
            Get Early Access →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

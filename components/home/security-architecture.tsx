import Link from "next/link";
import { motion } from "motion/react";
import SecurityArchitectureSVG from "../ui/security-architecture-svg";

export function SecurityArchitecture() {
  return (
    <section className="py-32 border-b border-border bg-surface">
      <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
            Ecosystem
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-6">
            Personal Security
            <br />
            Architecture
          </h2>
          <p className="font-sans text-[0.9rem] leading-[1.8] text-white/50 mb-8">
            TekGlove is more than a product — it's the centrepiece of a
            connected security ecosystem. Your glove communicates with AR smart
            glasses, drone feeds, and a phone hub to give you complete
            situational awareness in real time.
          </p>
          <Link
            href="/about"
            className="font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-orange border-b border-orange/40 pb-0.5 hover:border-orange transition-colors duration-200"
          >
            Learn More →
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/5 bg-[#050505] p-6"
        >
          <SecurityArchitectureSVG />
        </motion.div>
      </div>
    </section>
  );
}

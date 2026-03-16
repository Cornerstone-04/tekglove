import { features } from "@/lib/data";
import { motion } from "motion/react";

export function Features() {
  return (
    <section className="py-32 border-b border-border">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
            Why TekGlove?
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-white">
            Built Different.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-bg p-10 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <p className="font-mono text-xxs tracking-[0.2em] uppercase text-orange mb-3">
                {f.id}
              </p>
              <h3 className="font-heading font-bold text-[1.4rem] text-white mb-3">
                {f.title}
              </h3>
              <p className="font-sans text-[0.82rem] leading-[1.75] text-white/45">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

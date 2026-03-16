import { specs } from "@/lib/data";
import { motion } from "motion/react";

export function Specs() {
  return (
    <section className="border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {specs.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`flex flex-col gap-2 px-8 py-10 border-b border-border md:border-b-0 ${
              i % 2 === 0 ? "border-r border-border" : ""
            } ${i < 6 ? "md:border-r md:border-border" : ""} ${
              i === specs.length - 1 ? "md:border-r-0" : ""
            }`}
          >
            <span className="font-heading font-black text-[clamp(1.1rem,2.5vw,1.6rem)] text-white leading-tight">
              {s.value}
            </span>
            <span className="font-mono text-xxs tracking-[0.2em] uppercase text-muted">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

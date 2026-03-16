import { motion } from "motion/react";

export function WorksWith() {
  return (
    <section className="py-24 border-b border-border bg-surface">
      <div className="px-6 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[40ch]"
        >
          <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
            Compatibility
          </p>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] text-white mb-4">
            Built for Apple Watch Ultra.
          </h2>
          <p className="font-sans text-[0.88rem] leading-[1.8] text-white/50">
            Engineered specifically for the Apple Watch Ultra and Ultra 2 — the
            most capable Apple Watch ever made. Full crown, button, and
            touchscreen access retained.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Apple Watch badge-style graphic */}
          <div className="relative flex items-center justify-center w-48 h-48 border border-white/10 rounded-full bg-black">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.06)_0%,transparent_70%)]" />
            <div className="flex flex-col items-center gap-1 text-center z-10">
              <span className="font-mono text-xxs tracking-[0.2em] uppercase text-white/30">
                Works with
              </span>
              <span className="font-heading font-black text-[1.1rem] text-white tracking-wide">
                Apple Watch
              </span>
              <span className="font-mono text-xxs tracking-widest text-orange">
                Ultra · Ultra 2 · Series 9
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {["Ultra", "Ultra 2", "Series 9"].map((model) => (
              <div key={model} className="border border-border px-4 py-3">
                <span className="font-mono text-xxs tracking-widest text-white/50">
                  {model}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { ecosystemProducts, sharedTechnology } from "@/lib/data";
import { motion } from "motion/react";
import {
  Activity,
  Cog,
  Crosshair,
  MousePointer2,
  Shield,
  Zap,
} from "lucide-react";

const icons = [Crosshair, Activity, MousePointer2, Shield, Zap, Cog];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-b border-border py-28 md:py-36">
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
              The TekGlove Ecosystem
            </p>
            <h2 className="max-w-4xl font-heading text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] text-white">
              One Platform.
              <br />
              <span className="text-orange">Endless Possibilities.</span>
            </h2>
          </div>
          <p className="max-w-[52ch] font-sans text-sm leading-[1.8] text-white/50 md:pb-2">
            Six specialized gloves interpret hand data for six distinct fields,
            all powered by the same sensor, intelligence, connectivity, and
            wearable platform.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border lg:grid-cols-3">
          {ecosystemProducts.map((product, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex min-h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-surface md:p-10"
              >
                <div className="mb-10 flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center border border-orange/40 text-orange">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <p className="mb-3 font-mono text-xxs uppercase tracking-[0.2em] text-orange">
                  {product.accent}
                </p>
                <h3 className="font-heading text-4xl font-black text-white">
                  {product.mark}
                </h3>
                <p className="mt-2 min-h-10 font-sans text-xs leading-relaxed text-white/40">
                  {product.category}
                </p>

                <div className="my-8 h-px bg-white/10" />

                <p className="mb-4 font-mono text-xxs uppercase tracking-[0.18em] text-white/30">
                  Core capabilities
                </p>
                <ul className="mb-9 space-y-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 font-sans text-xs leading-relaxed text-white/65"
                    >
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 bg-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-3 font-mono text-xxs uppercase tracking-[0.18em] text-white/30">
                    Built for
                  </p>
                  <p className="mb-8 font-sans text-xs leading-[1.8] text-white/45">
                    {product.users.join(" · ")}
                  </p>
                  <div className="border-l-2 border-orange pl-4">
                    <p className="font-sans text-sm font-medium leading-relaxed text-white/85">
                      {product.value}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-px border border-border bg-surface px-8 py-10 md:px-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr] md:items-center">
            <div>
              <p className="mb-3 font-mono text-xxs uppercase tracking-[0.22em] text-orange">
                Shared technology stack
              </p>
              <h3 className="font-heading text-3xl font-black text-white">
                The TekGlove Core
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {sharedTechnology.map((technology) => (
                <div
                  key={technology}
                  className="flex min-h-20 items-center bg-bg px-4 py-5 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.12em] text-white/60"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

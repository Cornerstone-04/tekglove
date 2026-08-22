"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { WaitlistForm } from "./components/waitlist-form";
import { WaitlistSuccess } from "./components/waitlist-success";

export default function WaitlistPage() {
  const [complete, setComplete] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-svh overflow-hidden bg-bg px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28">
      <ShaderBackdrop
        variant="waitlist"
        className="mask-[radial-gradient(ellipse_at_65%_38%,black,transparent_72%)] opacity-45"
      />
      <div className="pointer-events-none absolute top-[16%] right-[8%] h-96 w-96 rounded-full bg-orange/8 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-350">
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
          className="mb-12 max-w-225 sm:mb-16"
        >
          <p className="section-kicker mb-6">Early access</p>
          <h1 className="display-title max-w-[12ch] text-[clamp(3.25rem,7vw,7rem)] text-white">
            Be part of what comes next.
          </h1>
          <p className="copy-secondary mt-8 max-w-[48ch] text-base leading-[1.75] sm:text-lg">
            Join the TekGlove waitlist for development updates, early testing
            opportunities, and first access to the gloves that matter to you.
          </p>

          <div className="mt-10 flex max-w-160 items-center gap-4 border-t border-white/10 pt-6">
            <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_18px_var(--orange)]" />
            <p className="font-mono text-xs tracking-[0.08em] text-white/55">
              One platform. Six connected gloves.
            </p>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            delay: reduceMotion ? 0 : 0.08,
          }}
          className="surface-panel relative overflow-hidden p-5 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-orange/70 to-transparent" />
          <AnimatePresence mode="wait" initial={false}>
            {complete ? (
              <WaitlistSuccess
                key="success"
                onResetAction={() => setComplete(false)}
              />
            ) : (
              <WaitlistForm
                key="form"
                onCompleteAction={() => setComplete(true)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

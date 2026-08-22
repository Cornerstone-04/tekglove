"use client";

import { motion, useReducedMotion } from "motion/react";
import { BsCheck2 } from "react-icons/bs";
import { Button } from "@/shared/components/ui/button";

export function WaitlistSuccess({
  onResetAction,
}: {
  onResetAction: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.35 }}
      className="flex min-h-120 flex-col items-center justify-center py-10 text-center"
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-orange/35 bg-orange/10 text-orange shadow-[0_0_60px_rgba(249,115,22,0.18)]">
        <BsCheck2 className="text-3xl" aria-hidden="true" />
      </div>
      <p className="section-kicker mb-5">Design preview complete</p>
      <h2 className="display-title max-w-[10ch] text-4xl text-white sm:text-5xl">
        The journey is ready.
      </h2>
      <p className="copy-secondary mt-6 max-w-[46ch] text-sm leading-[1.75] sm:text-base">
        This is how the completed waitlist experience will feel. No information
        has been stored while the Supabase integration is pending.
      </p>
      <Button
        type="button"
        variant="secondary"
        arrow="none"
        icon={false}
        onClick={onResetAction}
        className="mt-9"
      >
        Review again
      </Button>
    </motion.div>
  );
}

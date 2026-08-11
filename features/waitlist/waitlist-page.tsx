"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";

export default function WaitlistPage() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.knklabs.co.uk/";
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-bg">
      <ShaderBackdrop
        variant="waitlist"
        className="opacity-35 mask-[radial-gradient(circle_at_center,black,transparent_76%)]"
      />
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
        role="status"
        aria-atomic="true"
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        <motion.div
          animate={reduceMotion ? { opacity: 1 } : { opacity: [0.3, 1, 0.3] }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
          className="h-1.5 w-1.5 rounded-full bg-orange"
        />

        <p className="font-mono text-xs normal-case tracking-[0.08em] text-white/65">
          Redirecting
        </p>
      </motion.div>
    </div>
  );
}

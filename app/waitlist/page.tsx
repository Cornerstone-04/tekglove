"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

export default function WaitlistPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://knk-labs.vercel.app/";
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-svh bg-bg flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-orange"
        />

        <p className="font-mono text-xxs normal-case tracking-[0.35em] text-white/40">
          Redirecting
        </p>
      </motion.div>
    </div>
  );
}

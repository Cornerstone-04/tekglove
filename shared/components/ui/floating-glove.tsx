"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FloatingGloveProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingGlove({
  children,
  className = "",
  delay = 0,
}: FloatingGloveProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reduceMotion
          ? { transform: "translate3d(0, 0, 0)" }
          : {
              transform: [
                "translate3d(0, 0, 0)",
                "translate3d(0, -8px, 0)",
                "translate3d(0, 0, 0)",
              ],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : {
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

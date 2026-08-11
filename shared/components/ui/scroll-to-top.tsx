"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame: number | null = null;
    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 500);
        frame = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.22,
            ease: [0.23, 1, 0.32, 1],
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pressable group fixed bottom-6 right-6 z-40 flex h-8 w-8 cursor-pointer items-center justify-center border border-white/10 bg-black/60 backdrop-blur-md transition-[border-color,background-color,transform,opacity] duration-200 ease-[var(--ease-out)] hover:border-orange hover:bg-black/95 md:bottom-8 md:right-12"
        >
          <ArrowUp className="text-sm text-white/50 transition-colors duration-300 group-hover:text-orange" />

          <span className="absolute -left-px -top-px h-1.5 w-1.5 border-l border-t border-white/30 transition-colors duration-300 group-hover:border-orange" />
          <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-white/30 transition-colors duration-300 group-hover:border-orange" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

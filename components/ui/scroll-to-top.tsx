"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Listen to scroll events to show/hide the button
  useMotionValueEvent(scrollY, "change", (latest) => {
    
    if (latest > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 z-40 flex h-8 w-8 cursor-pointer items-center justify-center border border-white/10 bg-black/60 backdrop-blur-md transition-all ease-linear duration-300 hover:border-orange hover:bg-black/95 md:bottom-8 md:right-12"
        >
          <ArrowUp className="text-sm text-white/50 transition-colors duration-300 group-hover:text-orange" />

          <span className="absolute -left-px -top-px h-1.5 w-1.5 border-l border-t border-white/30 transition-colors duration-300 group-hover:border-orange" />
          <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-white/30 transition-colors duration-300 group-hover:border-orange" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

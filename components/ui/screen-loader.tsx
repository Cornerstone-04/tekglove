"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WatchSVG } from "./watch-svg";

export default function ScreenLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 2200;
    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);

      setProgress(Math.round(eased * 100));

      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 400);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-10 bg-black"
        >
          <WatchSVG progress={progress} />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <div className="font-heading text-[1.4rem] font-extrabold uppercase tracking-[0.2em] text-white">
              Tek<span className="text-orange">Glove</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex w-30 flex-col items-center gap-2"
          >
            <div className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-orange"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>

            <span className="font-mono text-[0.55rem] tracking-[0.2em] text-white/30">
              {String(progress).padStart(3, "0")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

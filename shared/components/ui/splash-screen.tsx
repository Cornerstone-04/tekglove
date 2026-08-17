"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { WatchSVG } from "@/shared/components/ui/watch-svg";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    const shouldShow =
      startedRef.current ||
      !sessionStorage.getItem("tekglove-splash-seen-watch");
    if (!shouldShow) return;

    if (!startedRef.current) {
      sessionStorage.setItem("tekglove-splash-seen-watch", "true");
      startedRef.current = true;
    }

    const previousOverflow = document.body.style.overflow;
    const start = performance.now();
    const duration = reduceMotion ? 250 : 2000;
    let frameId = 0;
    let exitId: ReturnType<typeof setTimeout> | null = null;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = elapsed === 1 ? 1 : 1 - 2 ** (-10 * elapsed);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      exitId = setTimeout(
        () => {
          setVisible(false);
          document.body.style.overflow = previousOverflow;
        },
        reduceMotion ? 0 : 180,
      );
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      if (exitId) clearTimeout(exitId);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: reduceMotion ? 0.2 : 0.45,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black"
          aria-hidden="true"
        >
          <ShaderBackdrop
            variant="sensor"
            className="opacity-30 mask-[radial-gradient(circle_at_center,black,transparent_68%)]"
          />

          <div className="relative z-10 flex flex-col items-center gap-10">
            <WatchSVG
              progress={progress}
              reduceMotion={Boolean(reduceMotion)}
            />

            <motion.div
              initial={{
                opacity: 0,
                transform: reduceMotion ? "translateY(0)" : "translateY(8px)",
              }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{
                delay: reduceMotion ? 0 : 0.3,
                duration: reduceMotion ? 0.2 : 0.6,
              }}
              className="text-center"
            >
              <div className="font-brand text-[1.65rem] font-extrabold uppercase tracking-[0.2em] text-white sm:text-[1.8rem]">
                Tek<span className="text-orange">Glove</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.2 }}
              className="flex w-36 flex-col items-center gap-2.5"
            >
              <div className="relative h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-orange"
                  style={{
                    width: "100%",
                    transform: `scaleX(${progress / 100})`,
                    transformOrigin: "left",
                  }}
                />
              </div>
              <span className="font-mono text-lg tracking-[0.2em] text-white">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { SplashSignal } from "@/shared/components/ui/splash-signal";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const startedRef = useRef(false);
  const previousOverflowRef = useRef("");

  useEffect(() => {
    const shouldShow =
      startedRef.current ||
      !sessionStorage.getItem("tekglove-splash-seen-signal");
    if (!shouldShow) return;

    if (!startedRef.current) {
      sessionStorage.setItem("tekglove-splash-seen-signal", "true");
      startedRef.current = true;
    }

    const previousOverflow = document.body.style.overflow;
    previousOverflowRef.current = previousOverflow;
    const duration = reduceMotion ? 450 : 3200;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const exitId = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      window.clearTimeout(exitId);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = previousOverflowRef.current;
      }}
    >
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: reduceMotion ? 0.2 : 0.6,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black"
          aria-hidden="true"
        >
          <ShaderBackdrop
            variant="sensor"
            className="mask-[radial-gradient(circle_at_center,black,transparent_68%)] opacity-30"
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <SplashSignal />

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
              <div className="font-brand text-[1.65rem] font-extrabold tracking-[0.2em] text-white uppercase sm:text-[1.8rem]">
                Tek<span className="text-orange">Glove</span>
              </div>
              <p className="mt-2 font-mono text-[0.55rem] font-medium tracking-[0.14em] text-white/60">
                ONE PLATFORM · MULTIPLE SIGNALS
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

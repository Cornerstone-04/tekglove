import { motion } from "motion/react";
import Image from "next/image";

const STICKY_FEATURES = [
  {
    id: "01",
    title: "Smart Dorsal Sensor",
    body: "A compact sensing system positioned on the back of the hand, leaving the palm and fingers free to grip, touch, move, and work naturally.",
    tag: "Core Technology",
  },
  {
    id: "02",
    title: "Hand-Data Capture",
    body: "Track movement, grip, gesture, position, and physical response from one of the body's richest sources of actionable data.",
    tag: "Sensing",
  },
  {
    id: "03",
    title: "Interpreted Insight",
    body: "AI and connected software turn raw hand data into performance feedback, health signals, alerts, commands, and operational intelligence.",
    tag: "Intelligence",
  },
];

export function StickyFeatures() {
  return (
    <section className="border-b border-border">
      <div className="grid w-full grid-cols-1 px-6 md:grid-cols-2 md:px-12">
        {/* Left: sticky image */}
        <div className="hidden md:flex items-start">
          <div className="sticky top-0 h-svh w-full flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_65%)] pointer-events-none" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/tekglove_angle_cutout.png"
                  alt="Tek Glove"
                  width={440}
                  height={440}
                  className="object-contain relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: scrolling feature blocks */}
        <div className="border-l border-border">
          {STICKY_FEATURES.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-5 border-b border-border px-10 py-20"
            >
              <div className="flex items-center">
                <span className="font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2 py-0.5">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-white leading-none">
                {f.title}
              </h3>
              <p className="font-sans text-[0.88rem] leading-[1.8] text-white/50 max-w-[48ch]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

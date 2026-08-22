"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionEaseOut, revealViewport } from "@/shared/motion/card-reveal";

export function OriginStory() {
  const reduceMotion = useReducedMotion();
  const stories = [
    {
      kicker: "The First Idea",
      title: "Box. Run. Bike.",
      direction: -32,
      body: "TekGlove began with BRB, a compact sensor concept for capturing sports data across boxing, running, and cycling. The early question was simple: where on the body could one small sensor produce the most useful data?",
    },
    {
      kicker: "The Breakthrough",
      title: "Look to the Hand.",
      direction: 32,
      body: "The foot can provide precise positioning for certain sports, but the hand holds a broader range of actionable data. Movement, grip, gesture, control, and physical response converge in one natural interface. That insight became TekGlove and the Smart Dorsal Sensor.",
    },
  ];

  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12">
      <div className="grid gap-16 md:grid-cols-2">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            initial={{
              opacity: 0,
              transform: reduceMotion
                ? "translateX(0px)"
                : `translateX(${story.direction}px)`,
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              delay: reduceMotion ? 0 : index * 0.1,
              ease: motionEaseOut,
            }}
          >
            <p className="section-kicker mb-5">{story.kicker}</p>
            <h2 className="mb-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold tracking-[-0.04em] text-white">
              {story.title}
            </h2>
            <p className="copy-secondary max-w-[62ch] text-base leading-[1.9]">
              {story.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

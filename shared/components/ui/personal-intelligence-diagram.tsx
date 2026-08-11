"use client";

import {
  Activity,
  BrainCircuit,
  CloudCog,
  Cpu,
  Network,
} from "lucide-react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useReducedMotion } from "motion/react";
import { alternatingCardReveal } from "@/shared/motion/card-reveal";

const architecture = [
  {
    label: "Source",
    title: "Hand Signals",
    description: "Movement, grip, gesture, position, physical response, and biometrics.",
    icon: Activity,
  },
  {
    label: "Capture",
    title: "Smart Dorsal Sensor",
    description: "Sensing, local processing, and wireless connectivity on the back of the hand.",
    icon: Cpu,
    core: true,
  },
  {
    label: "Interpret",
    title: "Edge Intelligence",
    description: "Recognition, pattern detection, analytics, recommendations, and alerts.",
    icon: BrainCircuit,
  },
  {
    label: "Connect",
    title: "TekGlove Platform",
    description: "Mobile apps, cloud dashboards, digital twins, AI assistants, and team systems.",
    icon: CloudCog,
  },
  {
    label: "Apply",
    title: "Insights & Systems",
    description: "Feedback, commands, connected devices, equipment, robotics, and people.",
    icon: Network,
  },
];

function Connector({ index }: { index: number }) {
  return (
    <div
      className="pia-connector flex items-center justify-center py-3 text-orange lg:px-2 lg:py-0"
      style={{ animationDelay: `${index * 240}ms` }}
      aria-hidden="true"
    >
      <BsArrowRight className="rotate-90 lg:rotate-0" size={22} strokeWidth={0.5} />
    </div>
  );
}

export function PersonalIntelligenceDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <figure aria-labelledby="pia-title" aria-describedby="pia-description">
      <figcaption className="sr-only">
        <span id="pia-title">TekGlove personal intelligence data flow</span>
        <span id="pia-description">
          Hand signals are captured by the Smart Dorsal Sensor, interpreted by
          edge intelligence, connected to the TekGlove platform, and applied as
          insights, feedback, and commands across connected systems.
        </span>
      </figcaption>

      <ol className="grid list-none grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
        {architecture.map((node, index) => {
          const Icon = node.icon;

          return (
            <li key={node.title} className="contents">
              <motion.article
                custom={{ index, reduceMotion, delay: index * 0.06 }}
                variants={alternatingCardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`relative flex min-h-56 flex-col rounded-2xl border p-6 ${
                  node.core
                    ? "pia-core border-orange bg-orange text-black"
                    : "border-white/10 bg-black/55 text-white"
                }`}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span
                    className={`font-mono text-xs tracking-[0.08em] ${
                      node.core ? "text-black/60" : "text-orange"
                    }`}
                  >
                    {node.label}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    className={node.core ? "text-black" : "text-orange"}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="mb-3 font-heading text-xl font-semibold leading-tight tracking-[-0.035em]">
                    {node.title}
                  </h3>
                  <p
                    className={`text-xs leading-[1.75] ${
                      node.core ? "text-black/75" : "text-white/70"
                    }`}
                  >
                    {node.description}
                  </p>
                </div>
              </motion.article>
              {index < architecture.length - 1 && (
                <Connector index={index} />
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 font-mono text-xs tracking-[0.05em] text-white/60">
        <span>Data flows outward</span>
        <span>Feedback and commands return to the hand</span>
        <span>One core architecture across six gloves</span>
      </div>
    </figure>
  );
}

"use client";

import { StickyFeatures } from "@/components/home/sticky-function";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { CounterStrip } from "@/components/home/counter-strip";
import { Features } from "@/components/home/features";
import { SecurityArchitecture } from "@/components/home/security-architecture";
import { HeroCTA } from "@/components/home/hero-cta";
import { Ecosystem } from "@/components/home/ecosystem";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <Hero />
      <Marquee />
      <CounterStrip />
      <Ecosystem />
      <Features />
      <StickyFeatures />
      <SecurityArchitecture />
      <HeroCTA />
    </div>
  );
}

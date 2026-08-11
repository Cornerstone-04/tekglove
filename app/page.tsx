"use client";

import { StickyFeatures } from "@/components/home/sticky-function";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { CounterStrip } from "@/components/home/counter-strip";
import { Features } from "@/components/home/features";
import { HeroCTA } from "@/components/home/hero-cta";
import { Ecosystem } from "@/components/home/ecosystem";
import { PersonalIntelligenceArchitecture } from "@/components/home/personal-intelligence-architecture";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <Hero />
      <Marquee />
      <CounterStrip />
      <Features />
      <StickyFeatures />
      <PersonalIntelligenceArchitecture />
      <Ecosystem />
      <HeroCTA />
    </div>
  );
}

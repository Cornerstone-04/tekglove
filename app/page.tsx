"use client";

import { StickyFeatures } from "@/components/home/sticky-function";
import { ProductShowcase } from "@/components/home/product-showcase";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { CounterStrip } from "@/components/home/counter-strip";
import { Features } from "@/components/home/features";
import { SecurityArchitecture } from "@/components/home/security-architecture";
import { HeroCTA } from "@/components/home/hero-cta";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <Hero />
      <Marquee />
      <CounterStrip />
      <Features />
      <StickyFeatures />
      <ProductShowcase />
      <SecurityArchitecture />
      {/*<Specs />*/}
      {/*<WorksWith />*/}
      <HeroCTA />
    </div>
  );
}

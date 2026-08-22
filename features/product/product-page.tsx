"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { ButtonLink } from "@/shared/components/ui/button";
import {
  productDetailConfigs,
  type PublishedProductName,
} from "./product-detail-config";
import { ProductVisual } from "./product-visual";
import { ProductCta } from "./components/product-cta";
import { ProductSpecifications } from "./components/product-specifications";
import { ProductFaq } from "./components/product-faq";

export default function ProductPage({
  productName,
}: {
  productName: PublishedProductName;
}) {
  const reduceMotion = useReducedMotion();
  const config = productDetailConfigs[productName];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const productTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(0px) scale(1)", "translateY(-28px) scale(0.94)"],
  );

  return (
    <div
      className="product-accent bg-bg pt-16"
      data-product-accent={config.accentColor}
    >
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-16 md:px-12 md:py-20"
      >
        <ShaderBackdrop
          variant={config.shader}
          className="mask-[radial-gradient(circle_at_72%_50%,black,transparent_55%)] opacity-35"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-b from-transparent to-bg" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 grid w-full gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
        >
          <div className="relative z-20">
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="section-kicker mb-5"
            >
              {config.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.6,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="display-title mb-7 max-w-[8ch] text-[clamp(4rem,9vw,9rem)] tracking-[-0.06em] text-white"
            >
              {config.title}{" "}
              <span className="text-orange">{config.titleAccent}</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                delay: reduceMotion ? 0 : 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mb-5 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.035em] text-white"
            >
              {config.subtitle}
            </motion.h2>
            <p className="copy-secondary mb-9 max-w-[48ch] text-[0.98rem] leading-[1.8]">
              {config.introduction}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/waitlist" icon={false}>
                Get Early Access
              </ButtonLink>
              <ButtonLink
                href="#specifications"
                variant="secondary"
                icon={false}
              >
                View Specifications
              </ButtonLink>
            </div>
          </div>

          <motion.div
            style={reduceMotion ? undefined : { transform: productTransform }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.7,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative flex min-h-104 items-center justify-center lg:min-h-168"
          >
            <div className="absolute inset-[8%] rounded-full bg-orange/10 blur-3xl" />
            <ProductVisual
              {...config.heroVisual}
              priority
              imageClassName="max-w-184"
            />
            <div className="absolute top-[16%] right-0 z-20 max-w-56 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-2xl backdrop-blur-2xl md:p-5">
              <p className="mb-2 font-mono text-xs tracking-[0.08em] text-orange">
                {config.signalLabel}
              </p>
              <p className="text-sm leading-relaxed text-white/75">
                {config.signalValue}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <ProductSpecifications specifications={config.specifications} />

      <section className="border-b border-white/10 px-6 py-20 md:px-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">Dual-Hand Architecture</p>
            <h2 className="display-title max-w-[12ch] text-[clamp(2.8rem,6vw,5rem)] text-white">
              Two Hands.
              <br />
              <span className="text-orange">One Connected System.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[54ch] text-[0.95rem] leading-[1.85] md:pb-1">
            The left hand carries the shared TekGlove intelligence layer. The
            right hand adds the specialist module that gives {config.name} its
            distinct purpose.
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative grid gap-5 lg:grid-cols-2"
        >
          {config.showcases.map((showcase, index) => (
            <motion.article
              key={showcase.title}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel overflow-hidden"
            >
              <div className="relative flex min-h-88 items-center justify-center bg-white/2 p-8 sm:min-h-120">
                <div className="absolute inset-[18%] rounded-full bg-orange/10 blur-3xl" />
                <ProductVisual
                  image={"image" in showcase ? showcase.image : undefined}
                  icon={showcase.icon}
                  delay={index * 0.6}
                />
              </div>
              <div className="border-t border-white/10 p-7 sm:p-9">
                <p className="section-kicker mb-4">{showcase.kicker}</p>
                <h2 className="mb-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {showcase.title}
                </h2>
                <p className="copy-secondary max-w-[48ch] text-sm leading-[1.8]">
                  {showcase.description}
                </p>
              </div>
            </motion.article>
          ))}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-orange/30 bg-bg px-4 py-2 font-mono text-xs tracking-[0.08em] text-orange lg:flex">
            Connected
          </div>
        </motion.div>
      </section>

      {/* Hand-first performance */}
      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">{config.intelligence.kicker}</p>
            <h2 className="display-title text-[clamp(2.8rem,6vw,5rem)] text-white">
              {config.intelligence.title}
              <br />
              <span className="text-orange">
                {config.intelligence.titleAccent}
              </span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
            {config.intelligence.description}
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {config.intelligence.capabilities.map((feature, index) => (
            <motion.article
              key={feature.title}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel p-8"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="copy-secondary text-sm leading-[1.8]">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Use cases */}
      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <p className="section-kicker mb-5">{config.useCases.kicker}</p>
            <h2 className="display-title text-[clamp(2.5rem,5vw,4.5rem)] text-white">
              {config.useCases.title}
              <br />
              <span className="text-orange">{config.useCases.titleAccent}</span>
            </h2>
          </motion.div>
          <motion.div
            custom={reduceMotion}
            variants={staggeredCardGroup}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-2 gap-3 lg:grid-cols-3"
          >
            {config.useCases.items.map((useCase, index) => (
              <motion.div
                key={useCase}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel flex min-h-28 items-end p-6"
              >
                <div>
                  <span className="font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                    {useCase}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProductFaq productName={productName} />
      <ProductCta config={config} />
    </div>
  );
}

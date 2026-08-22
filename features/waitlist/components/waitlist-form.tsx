"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ecosystemProducts } from "@/content/products";
import { Button } from "@/shared/components/ui/button";
import {
  waitlistRoles,
  waitlistStepContent,
} from "../data/waitlist-form-options";
import { useWaitlistForm } from "../hooks/use-waitlist-form";
import { CountrySelect } from "./country-select";
import { CustomSelect } from "./custom-select";
import { ProductInterestGrid } from "./product-interest-grid";

const fieldClassName =
  "min-h-13 w-full rounded-xl border border-white/10 bg-white/4 px-4 text-base text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/25 hover:border-white/20 focus:border-orange/70 focus:bg-white/6 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]";

function RequiredMark() {
  return (
    <>
      {" "}
      <span className="text-orange" aria-hidden="true">
        *
      </span>
      <span className="sr-only">Required</span>
    </>
  );
}

type WaitlistFormProps = {
  onCompleteAction: () => void;
};

export function WaitlistForm({ onCompleteAction }: WaitlistFormProps) {
  const form = useWaitlistForm(onCompleteAction);
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, bounce: 0, duration: 0.42 };

  const motionState = {
    initial: { opacity: 0, x: reduceMotion ? 0 : form.direction * 12 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduceMotion ? 0 : form.direction * -12 },
  };

  return (
    <div>
      <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.12em] text-orange">
            {waitlistStepContent[form.step].label}
          </p>
          <p className="mt-2 text-sm text-white/45">
            {waitlistStepContent[form.step].description}
          </p>
        </div>
        <p className="font-mono text-xs text-white/40">{form.step} of 3</p>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-2" aria-hidden="true">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-0.5 rounded-full transition-colors duration-300 ${item <= form.step ? "bg-orange" : "bg-white/10"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false} custom={form.direction}>
        {form.step === 1 && (
          <motion.form
            key="details"
            {...motionState}
            transition={transition}
            onSubmit={form.continueFromDetails}
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  First name
                  <RequiredMark />
                </span>
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  required
                  value={form.firstName}
                  onChange={(event) => form.setFirstName(event.target.value)}
                  placeholder="Your first name"
                  className={fieldClassName}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Last name
                  <RequiredMark />
                </span>
                <input
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  required
                  value={form.lastName}
                  onChange={(event) => form.setLastName(event.target.value)}
                  placeholder="Your last name"
                  className={fieldClassName}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white">
                Email address
                <RequiredMark />
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => form.setEmail(event.target.value)}
                placeholder="you@example.com"
                className={fieldClassName}
              />
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/8 bg-black/20 p-4">
              <input
                type="checkbox"
                name="marketingConsent"
                required
                checked={form.consent}
                onChange={(event) => form.setConsent(event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-orange"
              />
              <span className="text-xs leading-relaxed text-white/55">
                I agree to receive TekGlove development updates and early access
                invitations. I can unsubscribe at any time.
                <RequiredMark />
              </span>
            </label>

            <div className="flex flex-col-reverse items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
              <p className="max-w-[38ch] text-xs leading-relaxed text-white/35">
                Your information will only be used for TekGlove updates and
                product research.
              </p>
              <Button type="submit" icon={<BsArrowRight />}>
                Continue
              </Button>
            </div>
          </motion.form>
        )}

        {form.step === 2 && (
          <motion.form
            key="interests"
            {...motionState}
            transition={transition}
            onSubmit={form.continueFromInterests}
            className="space-y-7"
          >
            <ProductInterestGrid
              selected={form.selectedProducts}
              onChange={form.updateProductInterests}
              invalid={form.showProductError}
            />

            <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
              <Button
                type="button"
                variant="secondary"
                arrow="left"
                icon={<BsArrowLeft />}
                onClick={() => form.goToStep(1)}
              >
                Back
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </motion.form>
        )}

        {form.step === 3 && (
          <motion.form
            key="context"
            {...motionState}
            transition={transition}
            onSubmit={form.submitWaitlist}
            className="space-y-7"
          >
            <div>
              <p className="mb-3 text-sm font-medium text-white">
                Selected interests
              </p>
              <div className="flex flex-wrap gap-2">
                {form.selectedProducts.map((slug) => {
                  const product = ecosystemProducts.find(
                    (item) => item.slug === slug,
                  );
                  return (
                    <span
                      key={slug}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65"
                    >
                      {product?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <CustomSelect
                label="Intended use"
                name="role"
                options={waitlistRoles}
                value={form.role}
                onChangeAction={form.setRole}
              />
              <CountrySelect
                value={form.country}
                onChangeAction={form.setCountry}
              />
            </div>

            {form.role === "Business or organisation" && (
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white">
                  Organisation name
                </span>
                <input
                  type="text"
                  name="organisation"
                  autoComplete="organization"
                  placeholder="Company or institution"
                  className={fieldClassName}
                />
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white">
                What would you use TekGlove for?
              </span>
              <textarea
                name="useCase"
                rows={3}
                placeholder="Tell us what you would like the hand to make possible."
                className={`${fieldClassName} resize-none py-3.5 leading-relaxed`}
              />
            </label>

            {form.submissionError ? (
              <p
                role="alert"
                aria-live="polite"
                className="rounded-xl border border-red-400/25 bg-red-400/8 p-4 text-sm leading-relaxed text-red-100"
              >
                {form.submissionError}
              </p>
            ) : null}

            <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
              <Button
                type="button"
                variant="secondary"
                arrow="left"
                icon={<BsArrowLeft />}
                disabled={form.isSubmitting}
                onClick={() => form.goToStep(2)}
              >
                Back
              </Button>
              <Button type="submit" disabled={form.isSubmitting}>
                {form.isSubmitting ? "Joining..." : "Join the waitlist"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

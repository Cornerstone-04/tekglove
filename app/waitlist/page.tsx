"use client";

import { motion } from "motion/react";
import { SyntheticEvent, useState } from "react";
import { toast } from "sonner";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      useCase: (form.elements.namedItem("useCase") as HTMLTextAreaElement)
        .value,
      submittedAt: new Date().toISOString(),
    };

    try { 
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(message, {
        description: "Please try again or contact us at hello@tekglove.co.uk",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-svh bg-bg pt-16">
      <div className="px-6 py-20">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
          >
            Limited Availability
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 font-heading text-[clamp(3rem,9vw,6rem)] leading-[0.9] font-black uppercase text-white"
          >
            Join the
            <br />
            <span className="text-orange">Waitlist.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 font-sans text-[0.9rem] leading-[1.8] text-white/40"
          >
            Be among the first to experience Tek Glove. We&apos;ll reach out as
            soon as your spot is ready.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center"
            >
              <div className="mb-6 text-[3rem]">✦</div>
              <h2 className="mb-4 font-heading text-[2.5rem] font-black uppercase text-white">
                You&apos;re on the list.
              </h2>
              <p className="font-sans text-[0.85rem] leading-[1.8] text-white/40">
                We&apos;ll reach out as soon as your spot is ready.
                <br />
                Stay sharp.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
            >
              <div>
                <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                  How do you plan to use Tek Glove?
                </label>
                <textarea
                  name="useCase"
                  rows={3}
                  placeholder="Recovery, sport, healthcare, adventure..."
                  className="w-full resize-none border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black transition-opacity ${
                  loading
                    ? "cursor-not-allowed bg-orange/40"
                    : "cursor-pointer bg-orange hover:opacity-85"
                }`}
              >
                {loading ? "Submitting..." : "Join the Waitlist →"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { useState } from "react";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const inter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const heading: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
};

type Intent = "beta_testing" | "early_access" | "both" | "";

export default function SignupPage() {
  const [intent, setIntent] = useState<Intent>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      intent,
      useCase: (form.elements.namedItem("useCase") as HTMLTextAreaElement)
        .value,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    ...inter,
    fontSize: "0.85rem",
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--border-col)",
    color: "white",
    padding: "0.75rem 0",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    ...mono,
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.3)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100svh",
        paddingTop: "4rem",
      }}
    >
      <div style={{ padding: "5rem 1.5rem" }}>
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: "1rem",
            }}
          >
            Limited Availability
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              ...heading,
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 6rem)",
              color: "white",
              lineHeight: 0.9,
              marginBottom: "1.5rem",
            }}
          >
            Get Early
            <br />
            <span style={{ color: "var(--orange)" }}>Access.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              ...inter,
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.4)",
              marginBottom: "3rem",
            }}
          >
            Sign up to be a beta tester or join the early access waitlist. We'll
            be in touch with next steps.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: "center", padding: "4rem 0" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>✦</div>
              <h2
                style={{
                  ...heading,
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                You're on the list.
              </h2>
              <p
                style={{
                  ...inter,
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.8,
                }}
              >
                We'll reach out as soon as your spot is ready.
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
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              {/* Name */}
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--orange)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-col)")
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--orange)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-col)")
                  }
                />
              </div>

              {/* Intent */}
              <div>
                <label style={labelStyle}>I'm interested in *</label>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap" as const,
                    marginTop: "0.5rem",
                  }}
                >
                  {[
                    { value: "beta_testing", label: "Beta Testing" },
                    { value: "early_access", label: "Early Access" },
                    { value: "both", label: "Both" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setIntent(opt.value as Intent)}
                      style={{
                        ...mono,
                        fontSize: "0.62rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "0.6rem 1.25rem",
                        border: `1px solid ${intent === opt.value ? "var(--orange)" : "var(--border-col)"}`,
                        background:
                          intent === opt.value
                            ? "rgba(249,115,22,0.1)"
                            : "transparent",
                        color:
                          intent === opt.value
                            ? "var(--orange)"
                            : "rgba(255,255,255,0.4)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Use case */}
              <div>
                <label style={labelStyle}>
                  How do you plan to use TekGlove?
                </label>
                <textarea
                  name="useCase"
                  rows={3}
                  placeholder="Sport, security, outdoor adventure, work..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--orange)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-col)")
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading || !intent}
                style={{
                  ...inter,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background:
                    loading || !intent
                      ? "rgba(249,115,22,0.4)"
                      : "var(--orange)",
                  color: "black",
                  padding: "1rem 2rem",
                  border: "none",
                  cursor: loading || !intent ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s ease",
                }}
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}

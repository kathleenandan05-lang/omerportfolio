"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ExternalLink, Download, Globe2, Send, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-(--rp-navy) scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_0.9fr] gap-16">
        {/* Left: headline + links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-cyan) mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-soft-white) leading-tight mb-6">
            Ready to make your operations easier to run?
          </h2>
          <p className="text-(--rp-soft-white)/70 leading-relaxed max-w-lg mb-9">
            If your business is losing time to manual follow-ups, a messy CRM, or
            processes that only work when one specific person is available, that&apos;s
            exactly what I fix. Tell me what&apos;s slowing you down.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-(--rp-blue) hover:bg-(--rp-cyan) hover:text-(--rp-navy) text-(--rp-soft-white) font-semibold px-7 py-3.5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-cyan) mb-10"
          >
            Start a Conversation
            <Send className="w-4 h-4" strokeWidth={2} />
          </a>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-(--rp-soft-white)/80 hover:text-(--rp-cyan) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-cyan) rounded-sm w-fit"
            >
              <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-(--rp-soft-white)/80 hover:text-(--rp-cyan) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-cyan) rounded-sm w-fit"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              LinkedIn Profile
            </a>
            <a
              href="/resume"
              className="flex items-center gap-3 text-(--rp-soft-white)/80 hover:text-(--rp-cyan) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-cyan) rounded-sm w-fit"
            >
              <Download className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              Download Résumé
            </a>
            <p className="flex items-center gap-3 text-(--rp-soft-white)/50">
              <Globe2 className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              {profile.availability} · Remote, worldwide
            </p>
          </div>
        </motion.div>

        {/* Right: inquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 }}
          className="rounded-2xl bg-(--rp-midnight) border border-(--rp-soft-white)/10 p-7 lg:p-9"
        >
          {status === "success" ? (
            <p className="text-(--rp-soft-white) text-sm py-8 text-center">
              Thanks for reaching out. I&apos;ll get back to you shortly.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="rp-name" className="block text-xs font-medium text-(--rp-soft-white)/70 mb-1.5">
                  Name
                </label>
                <input
                  id="rp-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full bg-(--rp-navy) border border-(--rp-soft-white)/15 rounded-md px-3.5 py-2.5 text-sm text-(--rp-soft-white) placeholder:text-(--rp-soft-white)/50 focus:outline-2 focus:outline-offset-1 focus:outline-(--rp-cyan)"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="rp-email" className="block text-xs font-medium text-(--rp-soft-white)/70 mb-1.5">
                  Email
                </label>
                <input
                  id="rp-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full bg-(--rp-navy) border border-(--rp-soft-white)/15 rounded-md px-3.5 py-2.5 text-sm text-(--rp-soft-white) placeholder:text-(--rp-soft-white)/50 focus:outline-2 focus:outline-offset-1 focus:outline-(--rp-cyan)"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="rp-company" className="block text-xs font-medium text-(--rp-soft-white)/70 mb-1.5">
                  Company
                </label>
                <input
                  id="rp-company"
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  className="w-full bg-(--rp-navy) border border-(--rp-soft-white)/15 rounded-md px-3.5 py-2.5 text-sm text-(--rp-soft-white) placeholder:text-(--rp-soft-white)/50 focus:outline-2 focus:outline-offset-1 focus:outline-(--rp-cyan)"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="rp-help" className="block text-xs font-medium text-(--rp-soft-white)/70 mb-1.5">
                  What do you need help with?
                </label>
                <textarea
                  id="rp-help"
                  rows={3}
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full bg-(--rp-navy) border border-(--rp-soft-white)/15 rounded-md px-3.5 py-2.5 text-sm text-(--rp-soft-white) placeholder:text-(--rp-soft-white)/50 focus:outline-2 focus:outline-offset-1 focus:outline-(--rp-cyan) resize-none"
                  placeholder="CRM cleanup, lead automation, executive support..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong sending that. Please email me directly at{" "}
                  {profile.email} instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-(--rp-blue) hover:bg-(--rp-cyan) hover:text-(--rp-navy) text-(--rp-soft-white) font-semibold py-3 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-cyan) disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

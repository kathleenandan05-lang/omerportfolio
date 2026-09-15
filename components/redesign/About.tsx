"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, ShieldCheck, Users2, Globe2 } from "lucide-react";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: GraduationCap,
    label: "Lean Six Sigma Green Belt",
    sub: "Process discipline applied to every workflow",
  },
  {
    icon: ShieldCheck,
    label: "ISO 9001:2015 Internal Auditor",
    sub: "Quality-system auditing experience",
  },
  {
    icon: Users2,
    label: "97-Person Operation Standardized",
    sub: "SOPs and KPI systems built at enterprise scale",
  },
  {
    icon: Globe2,
    label: "Remote-First",
    sub: profile.location,
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 lg:py-32 bg-(--rp-soft-white) scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight mb-6">
            An industrial engineer who ended up running operations for other people&apos;s
            businesses.
          </h2>

          <div className="space-y-4 text-(--rp-slate) leading-relaxed">
            <p>
              I started in industrial engineering, then spent years supervising port and
              shipping operations — standardizing procedures, running root-cause analysis,
              and keeping large teams aligned on the same process. That background is why I
              approach remote executive and CRM work the same way: find the bottleneck,
              build the system, document it so it doesn&apos;t depend on me.
            </p>
            <p>
              Today that means CRM pipelines, Zapier and Make.com automations, and AI-assisted
              workflows for remote teams and coaching businesses — the same standardization
              instinct, just applied to inboxes and pipelines instead of ports.
            </p>
            <p>
              I care about reliability, ownership, and clear communication: showing up
              prepared, following through on deadlines, and making sure your operations
              never have to wait on me.
            </p>
          </div>
        </motion.div>

        {/* Right: abstract monogram composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl bg-(--rp-navy) aspect-square max-w-md mx-auto overflow-hidden">
            {/* faint grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true">
              <defs>
                <pattern id="rp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#rp-grid)" />
            </svg>

            {/* monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9rem] sm:text-[11rem] font-bold text-(--rp-soft-white)/10 leading-none select-none">
                OE
              </span>
            </div>

            {/* corner readout */}
            <div className="absolute top-6 left-6 text-(--rp-cyan) text-xs font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-(--rp-cyan) rp-status-dot" />
              Operations Log
            </div>
            <div className="absolute bottom-6 right-6 text-(--rp-soft-white)/50 text-xs font-medium tracking-wide">
              6+ yrs / 97-person scale
            </div>
          </div>

          {/* highlight chips */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-(--rp-slate)/15 bg-(--rp-warm-white) p-4"
              >
                <h.icon className="w-4 h-4 text-(--rp-blue) mb-2" strokeWidth={2} />
                <p className="text-sm font-bold text-(--rp-navy) leading-snug">{h.label}</p>
                <p className="text-xs text-(--rp-slate) mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

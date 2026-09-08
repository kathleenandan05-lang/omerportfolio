"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: "🎓",
    label: "Lean Six Sigma Green Belt",
    sub: "Process discipline applied to every workflow",
  },
  {
    icon: "🏢",
    label: "97-Person Teams Standardized",
    sub: "SOPs and KPI systems built and adopted at enterprise scale",
  },
  {
    icon: "📍",
    label: "Remote-First",
    sub: profile.location,
  },
  {
    icon: "✅",
    label: "ISO 9001:2015 Certified Auditor",
    sub: "Detail-oriented quality and documentation mindset",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="About"
              title="Operations-trained. Systems-minded. Built to make your business run smoother."
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m an Operations & Automation Specialist with a background in industrial engineering
                and 6+ years split between operations leadership and remote executive support. That
                combination gives me something most assistants don&apos;t have: a systematic,
                process-driven approach to every inbox, pipeline, and workflow I touch.
              </p>
              <p>
                I&apos;ve led SOP rollouts and KPI reporting for a 97-person operations team, and I&apos;ve
                built the CRM pipelines, Zapier and Make.com automations, and AI-assisted workflows that
                keep remote teams and coaching businesses running without the manual busywork. Whichever
                side of the business I&apos;m supporting, the goal is the same: fewer dropped balls, clearer
                visibility, and systems that don&apos;t depend on anyone remembering to do them by hand.
              </p>
              <p>
                What I care about is being reliably useful: showing up prepared, following through on
                deadlines, keeping communication clear, and making sure your operations never have to wait
                on me.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Get in Touch
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 text-sm font-medium border border-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                Download Resume
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <div className="text-sm font-bold text-slate-800 leading-tight mb-1">{h.label}</div>
                <div className="text-xs text-slate-500">{h.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

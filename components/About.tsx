"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: "🎓",
    label: "Lean Six Sigma Green Belt",
    sub: "Industrial Engineering background",
  },
  {
    icon: "🌐",
    label: "6+ Years in Operations",
    sub: "Logistics leadership to digital systems",
  },
  {
    icon: "📍",
    label: "Remote-First",
    sub: profile.location,
  },
  {
    icon: "✅",
    label: "ISO 9001:2015 Certified Auditor",
    sub: "BRC, Halal & HACCP experience",
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
              title="Engineered for operations. Built for automation."
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m an Industrial Engineer who spent years on the ground in logistics and manufacturing —
                running port operations, leading warehouse teams, and making supply chains work through
                process discipline and data.
              </p>
              <p>
                Over time, I transitioned into digital systems because I saw how much operational
                complexity modern tools could eliminate. Today, I combine that hands-on operations
                experience with automation platforms, CRM systems, and AI tools to help businesses
                build infrastructure that scales.
              </p>
              <p>
                What I care about is the same whether I&apos;m writing an SOP or building a Zapier workflow:
                making things work reliably, making information visible, and making it possible for your
                team to focus on work that matters.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Get in Touch
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

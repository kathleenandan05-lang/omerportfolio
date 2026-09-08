"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-slate-50">
      {/* Soft background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              {profile.availability}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 leading-[1.05] tracking-tight"
          >
            I keep executives and growing businesses{" "}
            <span className="text-blue-600">organized, automated, and moving forward.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl"
          >
            {profile.summary}
          </motion.p>

          {/* Positioning line */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm font-medium text-slate-400 tracking-wide"
          >
            Executive Assistant &nbsp;·&nbsp; Operations &amp; CRM Specialist &nbsp;·&nbsp; Process Improvement &amp; Automation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contact Me
            </a>
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap items-center gap-8 text-sm"
          >
            {[
              { value: "6+", label: "Years Experience" },
              { value: "92%", label: "Marketing Time Saved" },
              { value: "100%", label: "Lead Response Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                <span className="text-slate-500 leading-tight">{stat.label}</span>
                <span className="text-slate-200 select-none">|</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

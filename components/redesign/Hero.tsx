"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--rp-blue) bg-(--rp-blue)/8 border border-(--rp-blue)/20 px-3.5 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-(--rp-blue)" />
            Available for remote projects
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-(--rp-navy) leading-[1.08]"
          >
            I build the systems that keep growing businesses moving.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-(--rp-slate) leading-relaxed max-w-xl"
          >
            I combine executive support, operations management, CRM implementation,
            reporting, and workflow automation into one dependable system, so leads
            get followed up, work gets documented, and nothing depends on anyone
            remembering to do it by hand.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-(--rp-navy) hover:bg-(--rp-midnight) text-(--rp-soft-white) font-semibold px-6 py-3.5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 border border-(--rp-slate)/30 text-(--rp-navy) font-semibold px-6 py-3.5 rounded-md hover:border-(--rp-navy)/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
            >
              <Download className="w-4 h-4" strokeWidth={2} />
              Download Résumé
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-sm text-(--rp-slate)/80 border-t border-(--rp-slate)/15 pt-6"
          >
            6+ years in operations &nbsp;·&nbsp; Lean Six Sigma Green Belt &nbsp;·&nbsp;{" "}
            {profile.location}
          </motion.p>
        </motion.div>

        {/* Right column: dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

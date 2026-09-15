"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { results } from "@/data/results";

const featuredLabels = [
  "Lead Response Rate",
  "Years in Operations",
  "Team Members Standardized",
  "Concurrent Automations Maintained",
];

const strip = featuredLabels
  .map((label) => results.find((r) => r.label === label))
  .filter((r): r is NonNullable<typeof r> => Boolean(r));

export default function CredibilityStrip() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" } },
  };

  return (
    <div className="border-y border-(--rp-slate)/15 bg-(--rp-soft-white)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {strip.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className={`text-center md:text-left ${i > 0 ? "md:border-l md:border-(--rp-slate)/15 md:pl-8" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-(--rp-navy)">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-(--rp-slate)">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { results } from "@/data/results";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Results() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact & Results"
          title="Numbers that reflect what good operations look like"
          subtitle="These aren't estimates. They're real outcomes from systems I've built, fixed, or optimized."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {results.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm text-center"
            >
              {item.icon && (
                <div className="text-2xl mb-3">{item.icon}</div>
              )}
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1.5">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 mb-1">
                {item.label}
              </div>
              {item.description && (
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

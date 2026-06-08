"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { toolCategories } from "@/data/skills";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Tools() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools I work with"
          subtitle="The platforms and tools I use to build, automate, and optimize."
        />

        <div className="mt-16 space-y-10">
          {toolCategories.map((category) => (
            <div key={category.name}>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4"
              >
                {category.name}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    className="inline-flex items-center bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/skills";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Capabilities across executive, CRM, and automation work"
          subtitle="Organized by the kind of problem I'm solving — not just a list of tools."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-blue-600 mb-3">{category.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {category.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

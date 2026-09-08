"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const values = [
  {
    icon: "📋",
    title: "Executive & Operations Support",
    description:
      "I manage task lists, track deadlines, coordinate meetings, and follow up across departments — the day-to-day execution that keeps your calendar and your business moving.",
    color: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100",
  },
  {
    icon: "⚡",
    title: "CRM & Automation",
    description:
      "I build and maintain the CRM pipelines and Zapier/Make.com workflows that turn manual busywork into systems that run themselves — from lead intake to reporting.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "🧭",
    title: "Process Improvement & Documentation",
    description:
      "With a Lean Six Sigma background, I find the root cause, fix it, and write the SOPs that make the fix stick — whether that's a 5-person team or a 97-person operation.",
    color: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-100",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I Do"
          title="Executive support that keeps your business moving"
          subtitle="Whether you need executive backup, CRM cleanup, or workflow automation — I handle the operations behind the scenes so you can focus on the business."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl border p-8 ${item.color} cursor-default`}
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

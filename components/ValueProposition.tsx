"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const values = [
  {
    icon: "⚙️",
    title: "Operations Systems",
    description:
      "SOPs, process documentation, bottleneck elimination, and KPI frameworks that give your team clarity and consistency at scale.",
    color: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100",
  },
  {
    icon: "⚡",
    title: "Automation & CRM Workflows",
    description:
      "End-to-end workflows in Zapier, Make.com, and GoHighLevel that eliminate manual steps and keep your pipeline moving automatically.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "📊",
    title: "Dashboards & Process Visibility",
    description:
      "KPI dashboards and reporting systems so you always know what's happening in your operations — without chasing updates.",
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
          title="Turning operational chaos into clear, scalable systems"
          subtitle="Whether you're drowning in manual processes or flying blind without visibility, I build the systems that fix it."
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

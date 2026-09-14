"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/data/profile";

const services = [
  {
    icon: "📋",
    title: "Executive & Administrative Support",
    description:
      "Day-to-day executive backup — managing task lists, tracking deadlines, coordinating meetings, and following up across departments to keep projects on schedule.",
    deliverables: ["Task & deadline tracking", "Meeting coordination", "Inbox & calendar support", "Cross-team follow-ups"],
  },
  {
    icon: "🗂️",
    title: "CRM & Database Management",
    description:
      "Building and maintaining CRM pipelines in GoHighLevel, JobNimbus, and Airtable — keeping contact records, pipeline stages, and lead data clean and accurate.",
    deliverables: ["CRM pipeline setup", "Contact database cleanup", "Lead tracking", "Data accuracy audits"],
  },
  {
    icon: "⚡",
    title: "Workflow & Process Automation",
    description:
      "Designing Zapier and Make.com workflows and AI-assisted automations that eliminate manual data entry and keep leads, notifications, and reports moving without you.",
    deliverables: ["Zapier & Make.com workflows", "Lead intake automation", "AI-assisted drafting", "Notification systems"],
  },
  {
    icon: "🧭",
    title: "SOP & Process Documentation",
    description:
      "Applying Lean Six Sigma and root cause analysis to document what's broken, fix it, and write the SOPs and process maps that make the fix repeatable.",
    deliverables: ["SOP authoring", "Process mapping", "Root cause analysis", "Onboarding guides"],
  },
  {
    icon: "📊",
    title: "Reporting & KPI Dashboards",
    description:
      "Building dashboards and reporting systems that give management real-time visibility into pipeline activity, operational performance, and task completion.",
    deliverables: ["KPI dashboard builds", "Pipeline reporting", "Data reconciliation", "Performance tracking"],
  },
  {
    icon: "🎨",
    title: "Marketing Operations Support",
    description:
      "Running the marketing-ops layer — AI-assisted newsletter production, Kajabi course and landing page builds, Canva template review, and multi-channel post scheduling.",
    deliverables: ["Newsletter production", "Landing page builds", "Canva template review", "Multi-channel scheduling"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="How I support your business"
          subtitle="Reliable, detail-driven support across the executive, CRM, and automation work that keeps your business running smoothly."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-7 shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{service.description}</p>
              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-5">
            Not sure where to start? Let&apos;s figure out what your team needs most.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

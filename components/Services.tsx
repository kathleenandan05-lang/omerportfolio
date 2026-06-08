"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/data/profile";

const services = [
  {
    icon: "📋",
    title: "Process Documentation & SOPs",
    description:
      "Clear, structured SOPs and work instructions that your team can follow without ambiguity. I document, format, and organize processes so nothing lives only in someone's head.",
    deliverables: ["SOP documents", "Process maps", "Onboarding guides", "Work instructions"],
  },
  {
    icon: "🔧",
    title: "CRM Setup & Cleanup",
    description:
      "Whether you're starting fresh or inheriting a mess, I configure, clean, and automate your CRM so your pipeline is accurate and your team actually uses it.",
    deliverables: ["Pipeline design", "Data cleanup", "Stage automation", "Reporting dashboards"],
  },
  {
    icon: "⚡",
    title: "Automation Workflows",
    description:
      "End-to-end automation with Zapier and Make.com — connecting your tools, eliminating manual handoffs, and making sure nothing falls through the cracks.",
    deliverables: ["Multi-step Zaps/Scenarios", "App integrations", "Error handling", "Documentation"],
  },
  {
    icon: "📊",
    title: "Dashboard & KPI Reporting",
    description:
      "Operational dashboards that surface the right metrics at the right time, so you can make decisions without digging through spreadsheets.",
    deliverables: ["KPI frameworks", "Google Sheets dashboards", "Airtable views", "Automated reports"],
  },
  {
    icon: "🗂️",
    title: "Data Organization & Reconciliation",
    description:
      "Cleaning, structuring, and reconciling messy data across platforms — so your records are accurate and your systems work from a clean foundation.",
    deliverables: ["Deduplication", "Data normalization", "Cross-platform sync", "Audit logs"],
  },
  {
    icon: "⚙️",
    title: "Admin & Operations Support",
    description:
      "Ongoing operational support for businesses that need a reliable systems person without a full-time hire — from process improvement to tool management.",
    deliverables: ["Tool management", "Process improvement", "Workflow optimization", "Team coordination"],
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
    <section id="services" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="What I can help you with"
          subtitle="Focused on the operational work that compounds — systems, automation, and visibility."
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
              className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-base font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>
              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
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
          <p className="text-slate-600 mb-5">
            Not sure which service fits? Let&apos;s figure it out together.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
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

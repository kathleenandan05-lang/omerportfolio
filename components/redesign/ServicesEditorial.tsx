"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarClock, Workflow, ClipboardCheck } from "lucide-react";

const services = [
  {
    number: "01",
    icon: CalendarClock,
    title: "Executive & Operations Support",
    problem:
      "Growing teams lose hours a week to task lists, meeting coordination, and follow-ups that fall through the cracks without a dedicated owner.",
    handles: [
      "Task and deadline tracking across departments",
      "Meeting coordination and inbox/calendar support",
      "Cross-team follow-ups and status reporting",
    ],
    outcome: "Nothing depends on someone remembering to do it by hand.",
    tools: ["Google Workspace", "Notion", "Slack"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "CRM & Workflow Automation",
    problem:
      "Leads sit in spreadsheets, CRMs go stale, and marketing tools don't talk to each other — so response times slip and deals get missed.",
    handles: [
      "CRM pipeline design and cleanup (GoHighLevel, JobNimbus, Airtable)",
      "Zapier/Make.com automations connecting lead sources, CRM, and email",
      "AI-assisted content and newsletter production pipelines",
    ],
    outcome: "Every new lead gets a response in minutes, not hours — automatically.",
    tools: ["GoHighLevel", "Zapier", "Make.com", "n8n"],
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Process Improvement & Documentation",
    problem:
      "Process knowledge lives in one person's head, training is inconsistent, and there's no reliable way to track whether operations are actually improving.",
    handles: [
      "Root cause analysis using Lean Six Sigma methods",
      "SOP authoring, process maps, and onboarding guides",
      "KPI dashboards and reporting cadences for management visibility",
    ],
    outcome: "Standardized procedures that scale from a 5-person team to a 97-person operation.",
    tools: ["Lean Six Sigma", "Google Sheets", "Excel"],
  },
];

export default function ServicesEditorial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight">
            Three capabilities, one operator.
          </h2>
        </div>

        <div className="divide-y divide-(--rp-slate)/15">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
                className={`grid lg:grid-cols-[0.4fr_1fr] gap-8 lg:gap-16 py-14 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                    <span className="text-5xl lg:text-6xl font-bold text-(--rp-slate)/20 tabular-nums">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-lg bg-(--rp-navy) flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-(--rp-cyan)" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <h3 className="text-2xl font-bold text-(--rp-navy) mb-4">{service.title}</h3>
                  <p className="text-(--rp-slate) leading-relaxed max-w-2xl mb-6">
                    {service.problem}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.handles.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-(--rp-navy)">
                        <span className="w-1.5 h-1.5 rounded-full bg-(--rp-blue) mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-semibold text-(--rp-navy) border-l-2 border-(--rp-gold) pl-4 mb-6">
                    {service.outcome}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium text-(--rp-slate) bg-(--rp-slate)/8 px-3 py-1.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

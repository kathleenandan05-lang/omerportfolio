"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/experience";
import { formatDate } from "@/lib/utils";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked and what I've built"
          align="left"
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className="relative sm:grid sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                {/* Date column */}
                <div className="hidden sm:flex flex-col items-end gap-1 pt-1 pr-8 text-right">
                  <span className="text-xs font-semibold text-blue-600">
                    {formatDate(entry.startDate)}
                  </span>
                  <span className="text-xs text-slate-400">–</span>
                  <span className="text-xs font-medium text-slate-500">
                    {entry.endDate === "Present" ? (
                      <span className="text-emerald-600 font-semibold">Present</span>
                    ) : (
                      formatDate(entry.endDate)
                    )}
                  </span>
                  <span className="mt-2 text-xs text-slate-400 italic">{entry.type}</span>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-[200px] top-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm -translate-x-1/2" />

                {/* Content */}
                <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
                  {/* Mobile date */}
                  <div className="flex items-center gap-2 mb-3 sm:hidden">
                    <span className="text-xs font-medium text-blue-600">
                      {formatDate(entry.startDate)}
                    </span>
                    <span className="text-slate-300">–</span>
                    <span className="text-xs text-slate-500">
                      {entry.endDate === "Present" ? (
                        <span className="text-emerald-600 font-semibold">Present</span>
                      ) : (
                        formatDate(entry.endDate)
                      )}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{entry.role}</h3>
                      <p className="text-sm text-blue-600 font-medium mt-0.5">{entry.company}</p>
                      <p className="text-xs text-slate-400 mt-1">{entry.location}</p>
                    </div>
                    {entry.current && (
                      <span className="text-xs bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full font-medium flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{entry.summary}</p>

                  {entry.achievements.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {entry.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg
                            className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.tools.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {entry.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

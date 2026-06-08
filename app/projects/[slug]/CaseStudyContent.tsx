"use client";

import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CaseStudyContent({ project }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 space-y-16">

      {/* Two-column: Problem + Solution */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-red-50 border border-red-100 rounded-2xl p-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-red-700 uppercase tracking-wide">The Problem</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">{project.problem}</p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wide">The Solution</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">{project.solution}</p>
        </motion.div>
      </div>

      {/* Process Steps */}
      {project.process.length > 0 && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-slate-800 mb-8">How I approached it</h2>
          <div className="space-y-4">
            {project.process.map((step, i) => (
              <motion.div
                key={step.heading}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-5 bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1.5">{step.heading}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tools Used */}
      {project.tools.length > 0 && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-slate-800 mb-5">Tools & Platforms</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-xl border border-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Results */}
      {project.results.length > 0 && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-slate-800 mb-5">Results</h2>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg
                    className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Key Metrics */}
      {project.metrics.length > 0 && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-slate-800 mb-5">Key Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">{m.value}</div>
                <div className="text-xs text-slate-500 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Lessons Learned */}
      {project.lessons && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💡</span>
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">What I learned</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">{project.lessons}</p>
        </motion.div>
      )}

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

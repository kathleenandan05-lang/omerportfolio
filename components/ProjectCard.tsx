"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300"
    >
      {/* Card Header */}
      <div className="p-6 pb-4 flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {project.icon && (
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {project.icon}
              </div>
            )}
            <span className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
            {project.dateCompleted.replace("-", " / ")}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.shortSummary}
        </p>

        {/* Problem / Result highlight */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm">
            <span className="text-slate-400 dark:text-slate-500 font-medium min-w-[60px] flex-shrink-0">Problem</span>
            <span className="text-slate-600 dark:text-slate-300 line-clamp-2">{project.problem.slice(0, 90)}…</span>
          </div>
          {project.metrics[0] && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-400 dark:text-slate-500 font-medium min-w-[60px] flex-shrink-0">Impact</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{project.metrics[0].value}</span>
              <span className="text-slate-600 dark:text-slate-300">{project.metrics[0].label}</span>
            </div>
          )}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-slate-50 dark:border-slate-800">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
        >
          View Case Study
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

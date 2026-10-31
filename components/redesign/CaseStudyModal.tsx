"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import CaseStudyContent from "@/app/projects/[slug]/CaseStudyContent";
import Modal from "./Modal";

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

/**
 * Full case study in a modal overlay. Reuses the same CaseStudyContent as
 * the /projects/[slug] page, so both always show identical content.
 */
export default function CaseStudyModal({ project, open, onClose }: Props) {
  // `project` stays set after closing so the content remains visible
  // during the exit animation.
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose} label={`Case study: ${project.title}`}>
      <header className="px-6 lg:px-8 pt-14 sm:pt-12 pb-10 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-5 pr-12">
            {project.icon && <span className="text-3xl">{project.icon}</span>}
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {project.dateCompleted.replace("-", " / ")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 leading-tight mb-4">
            {project.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {project.shortSummary}
          </p>
        </div>
      </header>

      <CaseStudyContent project={project} />

      <footer className="px-6 lg:px-8 pb-10">
        <div className="max-w-4xl mx-auto flex justify-end">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
          >
            Open as a full page
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </footer>
    </Modal>
  );
}

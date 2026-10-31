"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";

const FEATURED_SLUGS = new Set([
  "automated-lead-capture-roofing",
  "ai-newsletter-generator",
  "shipping-process-optimization",
]);

const secondaryProjects = projects.filter((p) => !FEATURED_SLUGS.has(p.slug));

type FilterBucket = "All" | "Automation" | "CRM" | "Operations" | "Documentation" | "Executive Support";

const filterMap: Record<Exclude<FilterBucket, "All">, ProjectCategory[]> = {
  Automation: ["Automation", "Integration", "Email Marketing"],
  CRM: ["CRM", "Dashboard"],
  Operations: ["Operations", "Data Cleanup"],
  Documentation: ["SOP"],
  "Executive Support": [],
};

const filters: FilterBucket[] = [
  "All",
  "Automation",
  "CRM",
  "Operations",
  "Documentation",
  "Executive Support",
];

interface Props {
  /** Opens a case study in the modal instead of navigating; see FeaturedCaseStudies. */
  onOpenCaseStudy?: (e: MouseEvent<HTMLAnchorElement>, slug: string) => void;
}

export default function ProjectGrid({ onOpenCaseStudy }: Props) {
  const [active, setActive] = useState<FilterBucket>("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    active === "All"
      ? secondaryProjects
      : secondaryProjects.filter((p) => filterMap[active].includes(p.category));

  return (
    <div className="mt-20">
      <h3 className="text-lg font-bold text-(--rp-navy) mb-6">More projects</h3>

      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) ${
              active === f
                ? "bg-(--rp-navy) text-(--rp-soft-white)"
                : "bg-(--rp-slate)/8 text-(--rp-slate) hover:bg-(--rp-slate)/15"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={(e) => onOpenCaseStudy?.(e, project.slug)}
              className="group rounded-xl border border-(--rp-slate)/15 bg-(--rp-soft-white) p-6 hover:border-(--rp-blue)/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-(--rp-blue) bg-(--rp-blue)/10 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              <h4 className="mt-4 text-base font-bold text-(--rp-navy) leading-snug group-hover:text-(--rp-blue) transition-colors">
                {project.title}
              </h4>
              <p className="mt-2 text-sm text-(--rp-slate) leading-relaxed line-clamp-2">
                {project.shortSummary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-(--rp-navy)">
                View case study
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center text-(--rp-slate) py-12">
              No projects in this category yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

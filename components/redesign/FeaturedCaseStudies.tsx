"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import CaseStudyVisual from "./CaseStudyVisual";
import ProjectGrid from "./ProjectGrid";

const featured = [
  {
    slug: "automated-lead-capture-roofing",
    outcomeTitle: "From a 2–4 hour lead response time to under 2 minutes",
    visual: {
      type: "before-after" as const,
      before: { value: "2–4 hrs", label: "Average response time" },
      after: { value: "< 2 min", label: "Every new lead, automatically" },
    },
  },
  {
    slug: "ai-newsletter-generator",
    outcomeTitle: "Weekly newsletter production cut from 6+ hours to 30 minutes",
    visual: {
      type: "before-after" as const,
      before: { value: "6+ hrs", label: "Manual research & drafting" },
      after: { value: "30 min", label: "AI drafting + human review" },
    },
  },
  {
    slug: "shipping-process-optimization",
    outcomeTitle: "Shipping delays and customer complaints cut through root-cause fixes",
    visual: {
      type: "dual-metric" as const,
      metrics: [
        { value: "90%", label: "Fewer shipping delays" },
        { value: "50%", label: "Fewer customer complaints" },
      ] as [{ value: string; label: string }, { value: string; label: string }],
    },
  },
];

export default function FeaturedCaseStudies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-(--rp-soft-white) scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight">
            Systems built, and the results they produced.
          </h2>
        </div>

        <div className="space-y-8">
          {featured.map((fc, i) => {
            const project = projects.find((p) => p.slug === fc.slug);
            if (!project) return null;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut", delay: shouldReduceMotion ? 0 : i * 0.05 }}
                className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 rounded-2xl border border-(--rp-slate)/15 bg-(--rp-warm-white) p-8 lg:p-12"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-(--rp-blue) bg-(--rp-blue)/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-(--rp-slate)">{project.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-(--rp-navy) leading-snug mb-4">
                    {fc.outcomeTitle}
                  </h3>

                  <p className="text-(--rp-slate) leading-relaxed mb-4">{project.problem}</p>
                  <p className="text-(--rp-navy) leading-relaxed mb-6">{project.solution}</p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium text-(--rp-slate) bg-(--rp-slate)/8 px-3 py-1.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--rp-navy) hover:text-(--rp-blue) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) rounded-sm"
                  >
                    Read the full case study
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>

                <div className="flex items-center">
                  <CaseStudyVisual {...fc.visual} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <ProjectGrid />
      </div>
    </section>
  );
}

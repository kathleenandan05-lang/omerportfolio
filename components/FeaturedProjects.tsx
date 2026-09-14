"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import Link from "next/link";

const ALL = "All";
const categories: (ProjectCategory | typeof ALL)[] = [
  ALL,
  "Automation",
  "CRM",
  "Integration",
  "SOP",
  "Operations",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | typeof ALL>(ALL);

  const filtered =
    activeCategory === ALL
      ? projects.filter((p) => p.featuredOnHome)
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Work Highlights"
          subtitle="Real results from past engagements — covering CRM management, marketing automation, operations documentation, and admin support."
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 dark:bg-blue-500 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <motion.div key={project.slug} variants={cardVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-slate-500 dark:text-slate-400">
            No projects in this category yet.
          </div>
        )}

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/40 px-6 py-3 rounded-xl"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

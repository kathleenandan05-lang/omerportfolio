"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { formatDate } from "@/lib/utils";

export default function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-(--rp-soft-white) scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight">
            Where the systems were built.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-(--rp-slate)/20" aria-hidden="true" />

          <div className="space-y-12">
            {experience.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : i * 0.05 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-(--rp-navy) border-2 border-(--rp-soft-white) ring-2 ring-(--rp-blue)/30" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-lg font-bold text-(--rp-navy)">{entry.role}</h3>
                  <span className="text-sm font-medium text-(--rp-blue)">
                    {formatDate(entry.startDate)} – {entry.endDate === "Present" ? "Present" : formatDate(entry.endDate)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-sm text-(--rp-slate)">
                  <span className="font-medium text-(--rp-navy)">{entry.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                    {entry.location}
                  </span>
                </div>

                <p className="text-(--rp-slate) leading-relaxed mb-4 max-w-2xl">{entry.summary}</p>

                <ul className="space-y-1.5">
                  {entry.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm text-(--rp-navy)">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--rp-gold) mt-1.5 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {profile.availability}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="text-blue-600">that actually works.</span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            If you&apos;re looking to clean up your operations, automate manual work, or get
            visibility into your pipeline. I&apos;d love to hear about what you&apos;re working on.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-base"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {profile.email}
            </motion.a>

            {profile.linkedin && (
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </motion.a>
            )}
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Based in {profile.location} · Available for remote engagements worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}

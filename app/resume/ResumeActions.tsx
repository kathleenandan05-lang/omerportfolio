"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

export default function ResumeActions() {
  return (
    <div className="no-print bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-16 z-30 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{profile.name} | Resume</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">{profile.title}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/#contact"
            className="text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:border-blue-300 dark:hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact Me
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

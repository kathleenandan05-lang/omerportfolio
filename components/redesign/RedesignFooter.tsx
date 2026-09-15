"use client";

import { profile } from "@/data/profile";

export default function RedesignFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--rp-navy) border-t border-(--rp-soft-white)/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-(--rp-soft-white)/60 text-center sm:text-left">
          <span className="font-semibold text-(--rp-soft-white)">{profile.name}</span>
          <span className="hidden sm:inline">·</span>
          <span>{profile.title}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-(--rp-soft-white)/50">
          <a href={`mailto:${profile.email}`} className="hover:text-(--rp-cyan) transition-colors">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--rp-cyan) transition-colors"
          >
            LinkedIn
          </a>
          <a href="/resume" className="hover:text-(--rp-cyan) transition-colors">
            Résumé
          </a>
        </div>

        <p className="text-xs text-(--rp-soft-white)/40">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}

"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">{profile.name}</span>
          <span>·</span>
          <span>{profile.title}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="/resume" className="hover:text-blue-600 transition-colors">
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            Email
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>

        <p className="text-xs text-slate-400">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}

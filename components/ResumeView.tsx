"use client";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { toolCategories } from "@/data/skills";
import { results } from "@/data/results";
import { formatDate } from "@/lib/utils";

export default function ResumeView() {
  const resumeProjects = projects.filter((p) => p.resumeVisible);

  return (
    <div id="resume-content" className="max-w-[860px] mx-auto bg-white">
      {/* Header */}
      <div className="border-b-2 border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">{profile.name}</h1>
        <p className="text-lg text-blue-600 font-medium mt-1">{profile.title}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
          <a href={`mailto:${profile.email}`} className="hover:text-blue-600 print:text-slate-600">
            {profile.email}
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 print:text-slate-600">
              {profile.linkedin.replace("https://", "")}
            </a>
          )}
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
          Professional Summary
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">{profile.resumeSummary}</p>
      </section>

      {/* Key Results */}
      <section className="mb-8">
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
          Impact Highlights
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {results.slice(0, 4).map((r) => (
            <div key={r.label} className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-600">{r.value}</div>
              <div className="text-xs text-slate-600 mt-0.5 leading-tight">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mb-8">
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
          Skills & Tools
        </h2>
        <div className="space-y-2">
          {toolCategories.map((cat) => (
            <div key={cat.name} className="flex gap-3 text-sm">
              <span className="font-semibold text-slate-700 min-w-[140px] flex-shrink-0">
                {cat.name}:
              </span>
              <span className="text-slate-600">{cat.tools.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((entry) => (
            <div key={entry.id} className="border-l-2 border-slate-100 pl-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{entry.role}</h3>
                  <p className="text-sm text-blue-600 font-medium">{entry.company}</p>
                </div>
                <div className="text-xs text-slate-500 text-right flex-shrink-0">
                  <div>{formatDate(entry.startDate)} – {entry.endDate === "Present" ? "Present" : formatDate(entry.endDate)}</div>
                  <div className="text-slate-400">{entry.location} · {entry.type}</div>
                </div>
              </div>
              <ul className="mt-2 space-y-1">
                {entry.achievements.map((a) => (
                  <li key={a} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    {a}
                  </li>
                ))}
              </ul>
              {entry.tools.length > 0 && (
                <p className="mt-2 text-xs text-slate-400">
                  <span className="font-medium">Tools: </span>{entry.tools.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-8">
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          Featured Projects
        </h2>
        <div className="space-y-4">
          {resumeProjects.map((p) => (
            <div key={p.slug} className="border-l-2 border-blue-100 pl-4">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="text-sm font-bold text-slate-800">{p.title}</h3>
                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-md flex-shrink-0">
                  {p.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{p.shortSummary}</p>
              <ul className="mt-1.5 space-y-0.5">
                {p.metrics.map((m) => (
                  <li key={m.label} className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">{m.value}</span> — {m.label}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-1">Tools: {p.tools.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section>
        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
          Education & Certifications
        </h2>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-semibold text-slate-800">{profile.education.degree}</p>
            <p className="text-sm text-slate-600">{profile.education.school} · {profile.education.location}</p>
          </div>
          <div className="mt-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Certifications</p>
            <ul className="space-y-1">
              {profile.certifications.map((cert) => (
                <li key={cert} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

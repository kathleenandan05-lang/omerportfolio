import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent from "./CaseStudyContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.shortSummary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects
    .filter((p) => p.slug !== slug && p.featuredOnHome)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Banner */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-5">
              {project.icon && (
                <span className="text-3xl">{project.icon}</span>
              )}
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-sm text-slate-400">{project.dateCompleted.replace("-", " / ")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              {project.shortSummary}
            </p>

            {/* Quick metrics row */}
            {project.metrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-6">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Case Study Body */}
        <CaseStudyContent project={project} />

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="bg-white border-t border-slate-100 py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-lg font-bold text-slate-800 mb-8">Other Case Studies</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {p.icon && <span className="text-xl">{p.icon}</span>}
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.shortSummary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Want a system like this for your business?
            </h2>
            <p className="text-slate-500 mb-7">
              Let&apos;s talk about what you&apos;re working on.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

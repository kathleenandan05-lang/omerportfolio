import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Omer El Awad",
  description:
    "A complete collection of automation, CRM, SOP, and operations projects built for real clients.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight">
              All Projects & Case Studies
            </h1>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Real work, real results. Each project is a system built to solve a specific
              operations or automation challenge.
            </p>
          </div>
        </div>
        {/* Reuse the FeaturedProjects component — it shows all by default */}
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}

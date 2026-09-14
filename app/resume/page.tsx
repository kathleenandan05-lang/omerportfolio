import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeView from "@/components/ResumeView";
import { profile } from "@/data/profile";
import ResumeActions from "./ResumeActions";

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: `Professional resume for ${profile.name}, ${profile.title}.`,
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 print:pt-0 min-h-screen bg-slate-50 dark:bg-slate-950 print:bg-white">
        {/* Action Bar (no-print) */}
        <ResumeActions />

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 print:max-w-full print:p-0">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 lg:p-14 print:rounded-none print:border-0 print:shadow-none print:p-0">
            <ResumeView />
          </div>
        </div>

        {/* Print note */}
        <div className="no-print max-w-4xl mx-auto px-6 lg:px-8 pb-12">
          <p className="text-xs text-center text-slate-400 dark:text-slate-500">
            Click &quot;Download PDF&quot; to save as PDF from your browser&apos;s print dialog.
            Choose &quot;Save as PDF&quot; as the destination for best results.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

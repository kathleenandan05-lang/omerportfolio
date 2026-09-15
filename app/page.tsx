import { Manrope, Inter } from "next/font/google";
import "./homepage.css";
import RedesignNavbar from "@/components/redesign/RedesignNavbar";
import Hero from "@/components/redesign/Hero";
import CredibilityStrip from "@/components/redesign/CredibilityStrip";
import ServicesEditorial from "@/components/redesign/ServicesEditorial";
import FeaturedCaseStudies from "@/components/redesign/FeaturedCaseStudies";
import ResultsComposition from "@/components/redesign/ResultsComposition";
import ExperienceTimeline from "@/components/redesign/ExperienceTimeline";
import SkillsMatrix from "@/components/redesign/SkillsMatrix";
import About from "@/components/redesign/About";
import ContactCTA from "@/components/redesign/ContactCTA";
import RedesignFooter from "@/components/redesign/RedesignFooter";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${manrope.variable} ${inter.variable} rp-scope min-h-screen`}>
      <RedesignNavbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ServicesEditorial />
        <FeaturedCaseStudies />
        <ResultsComposition />
        <ExperienceTimeline />
        <SkillsMatrix />
        <About />
        <ContactCTA />
      </main>
      <RedesignFooter />
    </div>
  );
}

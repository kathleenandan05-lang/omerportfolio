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

export default function RedesignPreviewPage() {
  return (
    <>
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
    </>
  );
}

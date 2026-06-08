import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Results from "@/components/Results";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Results />
        <FeaturedProjects />
        <Services />
        <Tools />
        <ExperienceTimeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

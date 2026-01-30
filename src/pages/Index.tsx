import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Education />
      <Certifications />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Research from "@/components/sections/research";
import Projects from "@/components/sections/projects";
import Activities from "@/components/sections/activities";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-700">
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Research />
      <Projects />
      <Activities />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

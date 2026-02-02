import About from "@/components/About";
import ExperienceSection  from '@/components/Experience'
import Hero from "@/components/Hero";

import ProjectSection from "@/components/Project";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    

    </main>
  );
}

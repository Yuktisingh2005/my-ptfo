import About from "@/components/About";
import ExperienceSection  from '@/components/Experience'
import ProjectSection from "@/components/Project";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    

    </main>
  );
}
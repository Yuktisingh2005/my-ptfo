"use client";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import SplitText from "@/components/ui/SplitText";
import { Timeline } from "@/components/ui/timeline";
import Threads from "@/components/ui/Threads";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazon, SiDocker,
  SiCplusplus, SiJavascript, SiPhp, SiHtml5, SiCss3, SiMysql, SiPostgresql, SiRust,
  SiMongodb, SiExpress, SiPandas, SiPostman, SiJupyter, SiFigma, SiApache
} from 'react-icons/si';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const techLogos = [
  // Languages
  { node: <SiCplusplus />, title: "C++" },
  { node: <SiPython />, title: "Python" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiPhp />, title: "PHP" },
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiCss3 />, title: "CSS" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiRust />, title: "Rust" },
  { node: <SiTypescript />, title: "TypeScript" },

  // Frameworks & Libraries
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiExpress />, title: "Express" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPandas />, title: "Pandas" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },

  // Tools
  { node: <SiPostman />, title: "Postman" },
  { node: <SiJupyter />, title: "Jupyter" },
  { node: <SiFigma />, title: "Figma" },

  // Cloud & Infrastructure
  { node: <SiAmazon />, title: "AWS" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiApache />, title: "Apache" },
];

const timelineData = [
  {
    title: "Sept 2025 - Jan 2026",
    content: (
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-white">Neuraltalk AI</h4>
        <p className="text-purple-300 text-lg font-medium">n8n Automation Expert & Full Stack Developer</p>
        <p className="text-neutral-300 leading-relaxed max-w-2xl">
          Building intelligent automation workflows and scalable web applications
        </p>
        <button className="mt-6 px-6 py-2 text-white border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
          View Certificate
        </button>
      </div>
    ),
  },
  {
    title: "Jun 2025 - Jul 2025",
    content: (
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-white">CFEES, DRDO</h4>
        <p className="text-green-300 text-lg font-medium">Full-Stack Developer Intern</p>
        <ul className="text-neutral-300 space-y-2 max-w-2xl">
          <li>• Designed web-based Complaint Management System</li>
          <li>• Created responsive UI with dynamic filtering and dashboards</li>
          <li>• Developed PHP backend with role-based access and MySQL integration</li>
          <li>• Deployed on WAMP server with multi-role functionality</li>
        </ul>
        <button className="mt-6 px-6 py-2 text-white border border-green-500/50 rounded-lg hover:bg-green-500/10 transition-all duration-300">
          View Certificate
        </button>
      </div>
    ),
  },
  {
    title: "Nov 2024 - Dec 2024",
    content: (
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-white">Weroute Systems Pvt Ltd</h4>
        <p className="text-blue-300 text-lg font-medium">Front-End Developer Intern</p>
        <ul className="text-neutral-300 space-y-2 max-w-2xl">
          <li>• Enhanced web applications using React.js with modern, scalable designs</li>
          <li>• Implemented UI/UX improvements optimizing usability and performance</li>
          <li>• Ensured cross-browser compatibility and mobile responsiveness</li>
        </ul>
        <button className="mt-6 px-6 py-2 text-white border border-blue-500/50 rounded-lg hover:bg-blue-500/10 transition-all duration-300">
          View Certificate
        </button>
      </div>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-b
        from-[#00030d]
        via-[#030c34]
        to-[#00030d]
        overflow-hidden
      "
    >
      <div className="absolute inset-0 [--color-neutral-300:#1e293b] [--color-neutral-100:rgba(30,41,59,0.1)] [--color-neutral-500:#334155] [--color-neutral-700:#1e293b] [--color-neutral-900:rgba(30,41,59,0.1)] [--color-neutral-800:#334155]">
        <BackgroundRippleEffect />
      </div>

      <div className="absolute top-8 left-8 z-10">
        <div className="relative">
          <SplitText
            text="EXPERIENCES"
            className="text-4xl font-bold text-white"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
          <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 pt-32">
        <Timeline data={timelineData} />
      </div>

 <div className="relative mt-20 py-8 overflow-hidden">
  {/* Gradient background with glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/30 to-purple-900/20"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl"></div>

  {/* Animated border */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>

  {/* LogoLoop with enhanced styling */}
  <div className="relative z-10 h-[80px] text-white/90 drop-shadow-lg">
    <LogoLoop
      logos={techLogos}
      speed={80}
      direction="left"
      logoHeight={56}
      gap={100}
      pauseOnHover={false}
      scaleOnHover={true}
      fadeOut
      fadeOutColor="rgba(0, 3, 13, 1)"
      ariaLabel="Technologies"
    />
  </div>
</div>

    </section>
  );
}

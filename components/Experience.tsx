"use client";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import SplitText from "@/components/ui/SplitText";
import { Timeline } from "@/components/ui/timeline";
import Threads from "@/components/ui/Threads";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazon, SiDocker,
  SiCplusplus, SiJavascript, SiPhp, SiHtml5, SiCss3, SiMysql, SiPostgresql, SiRust,
  SiMongodb, SiExpress, SiPandas, SiPostman, SiJupyter, SiFigma, SiApache, SiGit
} from 'react-icons/si';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

// Custom AWS component to display "AWS" text instead of Amazon logo
const AWSLogo = () => (
  <div className="flex items-center justify-center w-full h-full">
    <span className="text-orange-400 font-bold text-lg">AWS</span>
  </div>
);

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
  { node: <SiGit />, title: "Git" },

  // Cloud & Infrastructure
  { node: <AWSLogo />, title: "AWS" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiApache />, title: "Apache" },
];

const timelineData = [
  {
    title: "Sept 2025 - Jan 2026",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Neuraltalk AI
            </h4>
            <p className="text-blue-300 text-base sm:text-lg font-medium">n8n Automation & Front-end Developer Intern</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-blue-300 font-semibold mb-2 text-sm sm:text-base">💻 Development</h5>
            <ul className="text-neutral-300 space-y-1 text-xs sm:text-sm">
              <li>• SaaS platform development</li>
              <li>• AI-driven automation workflows</li>
              <li>• Cross-device UI optimization</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-cyan-300 font-semibold mb-2 text-sm sm:text-base">🔧 Tech Stack</h5>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs">MERN</span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md text-xs">AWS</span>
              <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs">Git</span>
              <span className="px-2 py-1 bg-cyan-600/20 text-cyan-300 rounded-md text-xs">Postman</span>
              <span className="px-2 py-1 bg-blue-400/20 text-blue-300 rounded-md text-xs">Figma</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
  onClick={() => window.open("/neuraltalk.pdf", "_blank")}
  className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-xs sm:text-sm font-medium"
>
  View Certificate
</button>
        </div>
      </div>
    ),
  },
  {
    title: "Jun 2025 - Jul 2025",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              CFEES, DRDO
            </h4>
            <p className="text-green-300 text-base sm:text-lg font-medium">Full-Stack Developer Intern</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-green-300 font-semibold mb-2 text-sm sm:text-base">💻 Development</h5>
            <ul className="text-neutral-300 space-y-1 text-xs sm:text-sm">
              <li>• Complaint Management System</li>
              <li>• Role-based access control</li>
              <li>• Dynamic dashboards</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-emerald-300 font-semibold mb-2 text-sm sm:text-base">🔧 Tech Stack</h5>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md text-xs">HTML</span>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-md text-xs">CSS</span>
              <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-md text-xs">JavaScript</span>
              <span className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-md text-xs">PHP</span>
              <span className="px-2 py-1 bg-green-400/20 text-green-300 rounded-md text-xs">MySQL</span>
              <span className="px-2 py-1 bg-emerald-400/20 text-emerald-300 rounded-md text-xs">WAMP</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
          onClick={() => window.open("/drdo.pdf", "_blank")}
          className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-xs sm:text-sm font-medium">
            View Certificate
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Nov 2024 - Dec 2024",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Weroute Systems Pvt Ltd
            </h4>
            <p className="text-purple-300 text-base sm:text-lg font-medium">Full-stack Developer Intern</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">💻 Development</h5>
            <ul className="text-neutral-300 space-y-1 text-xs sm:text-sm">
              <li>• Full-stack web applications</li>
              <li>• UI/UX enhancements</li>
              <li>• Cross-browser compatibility</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-500/10 backdrop-blur-sm border border-purple-600/20 rounded-xl p-3 sm:p-4">
            <h5 className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">🔧 Tech Stack</h5>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs">MERN</span>
              <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs">Tailwind</span>
              <span className="px-2 py-1 bg-purple-400/20 text-purple-300 rounded-md text-xs">Git</span>
              <span className="px-2 py-1 bg-purple-700/20 text-purple-300 rounded-md text-xs">Postman</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs">Figma</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
          onClick={() => window.open("/weroute.pdf", "_blank")}
           className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-xs sm:text-sm font-medium">
            View Certificate
          </button>
        </div>
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

      {/* Enhanced header */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10 px-2">
        <div className="relative">
          <SplitText
            text="EXPERIENCES"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
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
          <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 w-full animate-pulse rounded-full"></div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 font-light">My professional journey & growth</p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 sm:top-16 md:top-20 right-8 sm:right-12 md:right-20 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-8 sm:left-12 md:left-20 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 pt-28 sm:pt-32 md:pt-40">
        <Timeline data={timelineData} />
      </div>

      {/* Enhanced tech section */}
      <div className="relative mt-16 sm:mt-24 md:mt-32 py-8 sm:py-10 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-blue-900/50 to-cyan-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-3xl"></div>

        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-lg shadow-cyan-400/50"></div>

        <div className="relative z-10 h-[60px] sm:h-[75px] md:h-[90px] text-white drop-shadow-2xl">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={140}
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
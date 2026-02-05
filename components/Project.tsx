"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";

// Custom project data with images
const projectData = [
  {
    color: '#060010',
    title: 'Complaint Management System',
    description: 'Web-based system with role-based access, PHP backend, and MySQL database',
    label: 'Full-Stack',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    projectLink: 'https://drive.google.com/file/d/17Ikxg_gD9B3LjCdLl01NzwqzPJiYRaRz/view?usp=sharing'
  },
  {
    color: '#060010',
    title: 'Glint – Media Gallery',
    description: 'Next.js gallery with AWS S3, JWT auth, and smart organization',
    label: 'AI-Powered',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    projectLink: 'https://glintgallery.vercel.app/hero'
  },
  {
    color: '#060010',
    title: 'Facial Analysis App',
    description: 'Real-time emotion, gender & age detection using face-api.js',
    label: 'Computer Vision',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    projectLink: 'https://face-detection-nu-two.vercel.app/'
  },
  {
    color: '#060010',
    title: 'AI Workflow Agent',
    description: 'Automated invoice processing via Telegram to Google Drive & Excel using n8n.',
    label: 'Automation',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    projectLink: 'https://drive.google.com/file/d/1HrjDtVWkhWcsxYykLJjyHCN1PSLKAKiY/view?usp=drive_link'
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("left"); break;
    }
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

const variants = {
  initial: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

  return (
    <motion.div
      key={index}
      className="project-card relative rounded-xl min-h-[320px] flex flex-col overflow-hidden"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
  <motion.div
  className="relative h-48 w-full overflow-hidden bg-gray-900"
  initial="initial"
  whileHover={direction}
  transition={{ duration: 0.2, ease: "easeOut" }}
>
  <motion.img
    variants={variants}
    src={project.imageUrl}
    alt={project.title}
    className="h-full w-full object-cover scale-110"
  />
</motion.div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-purple-300 text-sm font-medium px-3 py-1 bg-purple-500/20 rounded-full">
              {project.label}
            </span>
          </div>

          <h3 className="text-white text-xl font-bold mb-3 leading-tight">
            {project.title}
          </h3>

          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <a
  href={project.projectLink}
  target="_blank"
  rel="noopener noreferrer"
  className="preview-btn self-start px-4 py-2 rounded-lg text-white text-sm font-medium"
>
  Preview Project
</a>

      </div>
    </motion.div>
  );
};

const ProjectBento = () => {
  return (
    <div className="w-full font-sans select-none relative max-w-[54rem] mx-auto">
      <style>
        {`
          .project-section {
            --glow-color: 132, 0, 255;
            --border-color: #392e4e;
            --background-dark: #060010;
          }

          .project-card {
            background: linear-gradient(135deg, rgba(6, 0, 16, 0.9) 0%, rgba(25, 10, 45, 0.8) 100%);
            border: 1px solid rgba(132, 0, 255, 0.2);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          @media (max-width: 768px) {
            .project-card {
              border-color: rgba(132, 0, 255, 0.5);
              box-shadow: 0 8px 32px rgba(132, 0, 255, 0.15);
            }
          }

          @media (min-width: 769px) {
            .project-card:hover {
              border-color: rgba(132, 0, 255, 0.5);
              box-shadow: 0 8px 32px rgba(132, 0, 255, 0.15);
              transform: translateY(-2px);
            }
          }

          .preview-btn {
            background: linear-gradient(135deg, rgba(132, 0, 255, 0.8) 0%, rgba(75, 0, 150, 0.9) 100%);
            border: 1px solid rgba(132, 0, 255, 0.3);
            transition: all 0.2s ease;
          }

          .preview-btn:hover {
            background: linear-gradient(135deg, rgba(132, 0, 255, 1) 0%, rgba(75, 0, 150, 1) 100%);
            box-shadow: 0 4px 15px rgba(132, 0, 255, 0.4);
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="project-section grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
  {projectData.map((project, index) => (
    <ProjectCard key={index} project={project} index={index} />
  ))}
</div>
    </div>
  );
};

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-b
        from-[#00030d]
        via-[#030c34]
        to-[#00030d]
        flex
        flex-col
        items-center
        justify-center
        py-20
      "
    >
      <div className="mb-12 text-center">
        <h1 className="text-white text-5xl font-bold mb-4">
          My Projects
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Showcasing innovative solutions across software development, AI, and automation
        </p>
      </div>

      <ProjectBento />
    </section>
  );
}
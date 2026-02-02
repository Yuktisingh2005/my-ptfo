"use client";

import LiquidEther from "@/components/ui/LiquidEther";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconBriefcase, IconFolder, IconMail } from "@tabler/icons-react";
import BlurText from "@/components/ui/BlurText";
import ShinyText from "@/components/ui/ShinyText";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "motion/react";

const navItems = [
  {
    name: "Home",
    link: "#hero",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Work",
    link: "#experience",
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export function FloatingPhoto() {
  return (
    <CardContainer containerClassName="p-0">
      <CardItem translateZ={80}>
        <Image
          src="/images/me2.png"
          alt="Yukti"
          width={420}
          height={420}
          className="rounded-2xl object-cover shadow-2xl"
        />
      </CardItem>
    </CardContainer>
  );
}

export default function About() {
  return (
    <section className="relative w-full h-screen bg-[#050d1e] overflow-hidden">
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Background */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-40 flex h-full items-center px-24">
        {/* LEFT TEXT */}
        <div className="w-1/2 flex flex-col gap-4">
          <BlurText
            text="HI!"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold text-white"
          />

          <ShinyText
            text="I'm Yukti Singh,"
            className="text-3xl"
          />

          <TextGenerateEffect
            words="Working as a Software Developer and Automation Expert."
            className="text-3xl text-[#f2f1f7]"
          />

          {/* Glassy Buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.6)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </motion.button>

            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl text-white font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(82,39,255,0.37)] hover:shadow-[0_8px_32px_rgba(82,39,255,0.6)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add your resume link here
                window.open('/resume.pdf', '_blank');
              }}
            >
              View My Resume
            </motion.button>
          </div>
        </div>

        {/* RIGHT FLOATING PHOTO */}
        <div className="w-1/2 flex justify-end">
          <FloatingPhoto />
        </div>
      </div>
    </section>
  );
}
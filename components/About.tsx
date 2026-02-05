"use client";

import LiquidEther from "@/components/ui/LiquidEther";
import { FloatingNav } from "@/components/ui/floating-navbar";
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
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
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
          className="rounded-2xl object-cover shadow-2xl w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[420px] h-auto"
        />
      </CardItem>
    </CardContainer>
  );
}

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b
        from-[#00030d]
        via-[#030c34]
        to-[#00030d] overflow-hidden">
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
      <div className="absolute inset-0 z-40 flex h-full items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-20 sm:py-24">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 text-center lg:text-left max-w-2xl items-center lg:items-start">
            <BlurText
              text="Hi!"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            />

            <ShinyText
              text="I'm Yukti Singh,"
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
            />

            <TextGenerateEffect
              words="Working as a Software Developer and Automation Expert."
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#f2f1f7]"
            />

            {/* Glassy Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <motion.button
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.6)] text-sm sm:text-base"
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
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl text-white font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(82,39,255,0.37)] hover:shadow-[0_8px_32px_rgba(82,39,255,0.6)] text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
      
                  window.open('/resume.pdf', '_blank');
                }}
              >
                View My Resume
              </motion.button>
            </div>
          </div>

          {/* RIGHT FLOATING PHOTO */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <FloatingPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = (link: string, index: number) => {
    setActiveItem(index);

    // Handle different link formats
    if (link === "#hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === "#about") {
      // Find the About section or scroll to a specific position
      const aboutSection = document.querySelector('[id*="about"]') ||
                          document.querySelector('section:nth-child(2)');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset active state after animation
    setTimeout(() => setActiveItem(null), 300);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.1] rounded-2xl bg-gradient-to-r from-black/90 via-slate-900/90 to-black/90 backdrop-blur-xl shadow-[0px_8px_32px_rgba(0,0,0,0.4),0px_0px_0px_1px_rgba(255,255,255,0.05),inset_0px_1px_0px_rgba(255,255,255,0.1)] z-[5000] px-6 py-3 items-center justify-center space-x-2",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <motion.button
            key={`link=${idx}`}
            onClick={() => handleNavClick(navItem.link, idx)}
            className={cn(
              "relative text-neutral-300 items-center flex space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/[0.08] group"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={activeItem === idx ? {
              scale: [1, 1.1, 1],
              backgroundColor: ["rgba(255,255,255,0)", "rgba(132,0,255,0.2)", "rgba(255,255,255,0)"]
            } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="block sm:hidden text-lg"
              animate={activeItem === idx ? { rotate: [0, 360] } : {}}
              transition={{ duration: 0.5 }}
            >
              {navItem.icon}
            </motion.span>
            <motion.span
              className="hidden sm:block text-sm font-medium"
              animate={activeItem === idx ? { y: [0, -2, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              {navItem.name}
            </motion.span>

            {/* Animated underline */}
            <motion.span
              className="absolute inset-x-0 -bottom-1 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent h-[2px] rounded-full"
              initial={{ width: "0%", opacity: 0 }}
              whileHover={{ width: "80%", opacity: 1 }}
              animate={activeItem === idx ? {
                width: ["0%", "100%", "0%"],
                opacity: [0, 1, 0]
              } : {}}
              transition={{ duration: 0.3 }}
            />

            {/* Glow effect on click */}
            {activeItem === idx && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.button>
        ))}

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: "50%",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
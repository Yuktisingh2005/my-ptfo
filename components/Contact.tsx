"use client";

import Orb from "./ui/Orb";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section
      id="contact"
      className="
        relative
        md:min-h-screen

        w-full
        bg-gradient-to-b
        from-[#00030d]
        via-[#030c34]
        to-[#00030d]
        flex
        flex
        flex-col
        items-center
      "
    >
      {/* ORB */}
      {/* ORB */}
<div
  className="
    relative
    w-full
    h-[360px] sm:h-[500px] md:h-[600px]
    flex items-center justify-center
    px-4
    mb-6 sm:mb-12 md:mb-0
  "
>

        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />

        {/* CONTENT INSIDE ORB */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={`text-center text-white ${playfair.className}`}
          >
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                tracking-wide
                leading-none
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
              "
            >
              LET'S
            </h1>
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                italic
                mt-1
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
              "
            >
              CONNECT
            </h1>
          </motion.div>

          {/* ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 pointer-events-auto"
          >
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/yukti-singh-2bb1002b4"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full
                border border-white/30
                backdrop-blur-md
                flex items-center justify-center
                text-white/70
                hover:text-white
                hover:scale-105
                hover:border-white
                transition-all duration-300
              "
            >
              <FaLinkedinIn size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>

            {/* EMAIL */}
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full
                border border-white/30
                backdrop-blur-md
                flex items-center justify-center
                text-white/70
                hover:text-white
                hover:scale-105
                hover:border-white
                transition-all duration-300
              "
            >
              <FaEnvelope size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </motion.div>

          {/* EMAIL TEXT */}
          <AnimatePresence>
            {showEmail && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="
                  mt-4 sm:mt-5
                  px-4 sm:px-5 py-2
                  rounded-full
                  text-xs sm:text-sm
                  text-white/70
                  backdrop-blur-lg
                  border border-white/10
                  max-w-[90vw]
                  break-all
                "
              >
                yuktisingh2005@gmail.com
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FULL WIDTH FOOTER */}
      <footer
        className="
          w-full
          px-4 sm:px-6 py-4 sm:py-6
          backdrop-blur-2xl
          bg-white/5
          border-t border-white/10
          text-center
          text-xs sm:text-sm
          text-white/60
          flex-shrink-0
        "
      >
        <p>© 2026 Yukti. All rights reserved.</p>
        <p className="mt-1">
          Designed & Built with <span className="text-shadow-white">♥</span> and lots
          of ☕
        </p>
      </footer>
    </section>
  );
}
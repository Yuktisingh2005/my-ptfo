"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import TypewriterText from "./ui/TypewriterText";



export default function Hero() {
  return (
    <section >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mt-8 text-center
            text-4xl md:text-7xl font-medium
            bg-linear-to-br from-slate-300 to-slate-500
            bg-clip-text text-transparent
          "
        >
          ideas.execute()
        </motion.h1>
      </LampContainer>

      {/* Typewriter tagline */}
      <div className="absolute bottom-30 w-full flex justify-center">
        <TypewriterText
          text="Where ideas come alive."
          className="text-4xl md:text-6xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          speed={150}
          delay={1000}
          cursorColor="#5227FF"
          loop={true}
          loopDelay={3000}
        />
      </div>
    </section>
  );
}

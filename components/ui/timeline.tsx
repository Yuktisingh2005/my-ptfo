"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-start pt-16 md:pt-32 md:gap-12"
          >
            <div className="flex flex-col md:flex-row z-40 items-start self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="relative">
                <div className="h-4 w-4 absolute left-5 md:left-5 top-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg shadow-purple-500/30" />
                <div className="h-8 w-8 absolute left-3 md:left-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                </div>
              </div>
              <h3 className="hidden md:block text-sm md:pl-16 md:text-lg font-semibold text-white/70 whitespace-nowrap tracking-wide">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full group">
              <h3 className="md:hidden block text-lg mb-6 text-left font-semibold text-white/70 tracking-wide">
                {item.title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-purple-500/10 hover:border-purple-400/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {item.content}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-7 left-7 top-0 overflow-hidden w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-400 via-blue-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
          />
        </div>
      </div>
    </div>
  );
};
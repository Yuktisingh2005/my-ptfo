'use client';

import { useState, useEffect } from 'react';
import LightRays from './ui/LightRays';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showSubtext, setShowSubtext] = useState(false);
  const [showElements, setShowElements] = useState(false);

    const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  const mainText = 'ideas.execute()';
  const subText = 'Where ideas come alive';


  useEffect(() => {
    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < mainText.length) {
        setDisplayText(mainText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setShowSubtext(true);
          setTimeout(() => setShowElements(true), 800);
        }, 600);
      }
    }, 80);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-[#00030d] via-[#030c34] to-[#00030d] flex items-center justify-center relative overflow-hidden">


      {/* LightRays Background Effect */}
      <div className="absolute inset-0">
        <LightRays
  raysOrigin="top-center"
  raysColor="#ffffff"
  raysSpeed={isMobile ? 2.2 : 1.5}
  lightSpread={isMobile ? 1.4 : 0.8}
  rayLength={isMobile ? 4.5 : 3.0}
  pulsating
  fadeDistance={isMobile ? 2.2 : 1.5}
  saturation={isMobile ? 1.4 : 1.2}
  followMouse={
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches
  }
  mouseInfluence={isMobile ? 0.15 : 0.3}
  noiseAmount={0.02}
  distortion={isMobile ? 0.18 : 0.1}
  className={isMobile ? 'opacity-90' : 'opacity-80'}
/>


      </div>

      <div className="text-center z-10 px-4 max-w-6xl">
        {/* Main text - simple font */}
       <div className="font-sans text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 sm:mb-8 relative break-all">

          <span className="text-white font-medium tracking-wide">
            {displayText}
          </span>
          <span className="animate-pulse text-white ml-1">|</span>
        </div>

        {/* Colorful animated subtitle */}
        <div className={`transition-all duration-1000 ease-out mb-16 ${showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent bg-[length:400%_400%]">
            {subText}
          </p>
        </div>

        {/* Glass effect status boxes */}
        <div className={`transition-all duration-1000 ease-out ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">


            {/* Available for work */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] animated-border">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Status</span>
                </div>
                <p className="text-white text-lg sm:text-xl font-medium">Available for work</p>
              </div>
            </div>

            {/* Experience */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] animated-border">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Experience</span>
                </div>
                <p className="text-white text-lg sm:text-xl font-medium">2+ Years</p>
              </div>
            </div>

            {/* Response time */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] animated-border">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Response Time</span>
                </div>
                <p className="text-white text-lg sm:text-xl font-medium">{'<24 Hours'}</p>
              </div>
            </div>

            {/* Businesses helped */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] animated-border">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                  <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">Businesses</span>
                </div>
                <p className="text-white text-lg sm:text-xl font-medium">15+ Helped</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes border-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animated-border {
          position: relative;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 200%;
          animation: border-move 3s linear infinite;
        }
        .animated-border::before {
          content: '';
          position: absolute;
          inset: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1));
          border-radius: inherit;
          z-index: 1;
        }
        .animated-border > div {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
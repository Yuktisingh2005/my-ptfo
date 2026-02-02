"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursorColor?: string;
  loop?: boolean;
  loopDelay?: number;
}

export default function TypewriterText({
  text,
  className = '',
  speed = 100,
  delay = 0,
  cursorColor = '#5227FF',
  loop = true,
  loopDelay = 2000
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTyping = () => {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else if (loop) {
          // Wait before restarting
          setTimeout(() => {
            setDisplayText('');
            setCurrentIndex(0);
          }, loopDelay);
        }
      }, speed);

      return timer;
    };

    const timer = startTyping();
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, loop, loopDelay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        style={{ color: cursorColor }}
      >
        |
      </motion.span>
    </span>
  );
}
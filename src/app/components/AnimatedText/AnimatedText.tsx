"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  speed = 50,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let i = 0;

    const animateText = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        timerRef.current = window.setTimeout(animateText, speed);
      } else {
        controls.start({ opacity: 1 });
      }
    };

    animateText();

    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, speed, controls]);

  return (
    <motion.span
      className={`inline-block font-['GmarketSansBold'] text-gray-900 ${className}`}
      initial={{ opacity: 1 }}
      animate={controls}
    >
      {displayedText}
      <motion.span
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default AnimatedText;

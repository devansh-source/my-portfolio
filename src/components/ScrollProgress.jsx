import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth the scroll progress value using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when user has scrolled down past 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group fixed bottom-8 right-8 z-[99] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg border border-white/10 bg-[#0f0826]/80 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgb(var(--color-accent-rgb)/0.35)] select-none"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Path */}
          <svg className="absolute w-full h-full transform -rotate-90 p-1" viewBox="0 0 100 100">
            {/* Background Track Circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-white/5 fill-none"
              strokeWidth="5"
            />
            {/* Active Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-accent fill-none"
              strokeWidth="5"
              strokeLinecap="round"
              style={{
                pathLength: smoothProgress,
              }}
            />
          </svg>

          {/* Centered Up Arrow */}
          <div className="relative z-10 flex items-center justify-center text-white">
            <svg
              className="w-5 h-5 text-white group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;

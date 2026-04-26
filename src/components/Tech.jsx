import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-icon-card",
        { opacity: 0, y: 40, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My toolkit</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div
        ref={wrapperRef}
        className="mt-16 flex flex-row flex-wrap justify-center gap-8"
      >
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="tech-icon-card group flex flex-col items-center gap-2 cursor-default"
          >
            <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-tertiary p-4 border border-white/5 group-hover:border-[#915EFF]/40 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(145,94,255,0.2)]">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[#915EFF]/0 group-hover:bg-[#915EFF]/5 transition-all duration-300" />
            </div>
            <span className="text-secondary text-[12px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");

import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.65)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 450 }}
        className="w-full"
      >
        <div className="bg-tertiary p-5 rounded-2xl w-full border border-white/5 hover:border-[#915EFF]/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] group">
          {/* Image */}
          <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* GitHub button */}
            <div className="absolute top-3 right-3">
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-5 h-5 object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[22px] group-hover:text-[#915EFF] transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-[22px] line-clamp-4">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-[12px] font-medium px-3 py-1 rounded-full text-[#a78bfa] bg-[#915EFF]/10 border border-[#915EFF]/20 hover:bg-[#915EFF]/20 hover:border-[#915EFF]/40 transition-all duration-200"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through real-world
        examples. Each project is briefly described with links to code
        repositories. It reflects my ability to solve complex problems, work
        with different technologies, and manage projects effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

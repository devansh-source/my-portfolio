import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ index, name, description, tags, image, source_code_link, onClickCard }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.65)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 450 }}
        className="w-full"
      >
        <div 
          onClick={onClickCard}
          className="bg-tertiary p-5 rounded-2xl w-full border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] group cursor-pointer"
        >
          {/* Image */}
          <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* GitHub button */}
            <div 
              className="absolute top-3 right-3 z-10"
              onClick={(e) => e.stopPropagation()} // Stop opening the modal
            >
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
            <h3 className="text-white font-bold text-[22px] group-hover:text-accent transition-colors duration-300">
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
                className="text-[12px] font-medium px-3 py-1 rounded-full text-[var(--color-accent-light)] bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
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
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            onClickCard={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Sleek Glassmorphic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-black-200 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 custom-scrollbar"
              style={{
                background: "rgba(10, 8, 30, 0.9)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 40px rgb(var(--color-accent-rgb) / 0.15)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 text-secondary hover:text-white transition-all duration-300 text-[18px] font-bold"
              >
                ✕
              </button>

              {/* Cover Image */}
              <div className="w-full h-[220px] sm:h-[280px] overflow-hidden rounded-2xl relative border border-white/5 mb-6 mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-200/80 via-transparent to-transparent" />
              </div>

              {/* Title, Role & Tags */}
              <div className="flex flex-col gap-2 border-b border-white/5 pb-4 mb-5">
                <h3 className="text-white font-bold text-[24px] sm:text-[30px] tracking-wide leading-tight">
                  {selectedProject.name}
                </h3>
                {selectedProject.role && (
                  <p className="text-accent text-[14px] font-bold tracking-wider uppercase">
                    Role: {selectedProject.role}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-bold text-[17px] mb-2 tracking-wide">Overview</h4>
                <p className="text-secondary text-[14.5px] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-white font-bold text-[17px] mb-3 tracking-wide">Key Features</h4>
                  <ul className="flex flex-col gap-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-secondary text-[14px] leading-relaxed">
                        <span className="text-accent text-[16px] leading-none mt-1 shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full text-[var(--color-accent-light)] bg-accent/10 border border-accent/20"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              {selectedProject.live_link && (
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-6">
                  <a
                    href={selectedProject.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl font-bold text-[15px] text-white transition-all duration-300 shadow-[0_4px_20px_rgb(var(--color-accent-rgb)/0.3)] hover:shadow-[0_4px_30px_rgb(var(--color-accent-rgb)/0.5)]"
                    style={{
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))"
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");

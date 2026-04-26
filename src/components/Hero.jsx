import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915EFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00cea8]/8 rounded-full blur-[100px] pointer-events-none" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Vertical accent line */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]"
          />
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        {/* Text content */}
        <div className="mt-28 md:mt-5">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF] relative">
              Devansh
              <motion.span
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop modern, user{" "}
            <span className="text-[#00cea8]">interfaces</span>
            <br />
            and web applications
          </motion.p>

          {/* CTA badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["React", "Node.js", "MySQL", "Python"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium text-[#915EFF] border border-[#915EFF]/30 bg-[#915EFF]/10 hover:bg-[#915EFF]/20 hover:border-[#915EFF]/60 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-7 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 group"
          >
            <span className="text-secondary text-xs font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              Scroll
            </span>
            <div className="w-[30px] h-[54px] rounded-3xl border-2 border-secondary/50 group-hover:border-[#915EFF] transition-colors duration-300 flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-[#915EFF]"
              />
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

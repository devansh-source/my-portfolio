import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1 * index, 0.6)}
      className="xs:w-[250px] w-full"
    >
      <Tilt
        options={{ max: 20, scale: 1.04, speed: 400 }}
        className="w-full"
      >
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.3)]">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col group">
            <div className="relative">
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#915EFF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-white text-[20px] font-bold text-center group-hover:text-[#915EFF] transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate software developer with hands-on experience in{" "}
        <span className="text-white font-semibold">Python, Java, and MySQL</span>,
        along with a strong foundation in web technologies such as{" "}
        <span className="text-white font-semibold">HTML, CSS, and JavaScript</span>.
        I also have a basic understanding of the{" "}
        <span className="text-[#915EFF] font-semibold">MERN stack</span> and am
        continuously improving my skills in full-stack development. I enjoy
        building efficient, database-driven applications that solve real-world
        problems. I focus on writing clean, scalable code and delivering
        reliable, user-friendly solutions.{" "}
        <span className="text-[#00cea8]">Let&apos;s collaborate</span> to build smart
        and effective solutions.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

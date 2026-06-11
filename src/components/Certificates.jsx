import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const CertificateCard = ({ index, name, issuer, date, icon, pdf_link, skills }) => {
  const renderIcon = (iconSrc) => {
    if (iconSrc === "postman") {
      // High-fidelity self-contained Postman logo SVG
      return (
        <svg className="w-7 h-7 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.94 9.13l-3.96 7.48c-.19.36-.55.58-.95.58s-.76-.22-.95-.58l-2.03-3.84-1.45 2.74c-.19.36-.55.58-.95.58s-.76-.22-.95-.58l-2.22-4.2c-.28-.53-.09-1.2.44-1.48.53-.28 1.2-.09 1.48.44l.44.83 1.45-2.74c.19-.36.55-.58.95-.58s.76.22.95.58l2.03 3.84 3-5.67c.28-.53 1.2-.72 1.73-.44.53.28.72 1.2.44 1.73z"/>
        </svg>
      );
    }
    if (typeof iconSrc === "string") {
      return <FaAward className="w-7 h-7 text-accent" />;
    }
    return <img src={iconSrc} alt="certificate-icon" className="w-7 h-7 object-contain" />;
  };

  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.15, 0.8)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{ 
          max: 10, 
          scale: 1.02, 
          speed: 800, 
          transition: true, 
          easing: "cubic-bezier(.03,.98,.52,.99)" 
        }}
        className="w-full h-full"
      >
        <div className="bg-tertiary p-6 rounded-2xl w-full h-full border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(145,94,255,0.15)] flex flex-col justify-between group cursor-pointer relative overflow-hidden transform-gpu will-change-transform">
          {/* Subtle top-right glow overlay */}
          <div className="absolute -right-10 -top-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-300 pointer-events-none" />

          <div>
            {/* Header: Issuer Logo & Date */}
            <div className="flex justify-between items-center w-full mb-5">
              <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-[#0a061e] border border-white/10 group-hover:border-accent/30 transition-all duration-300 shadow-inner">
                {renderIcon(icon)}
              </div>
              <span className="text-[13px] text-secondary font-medium tracking-wide">
                {date}
              </span>
            </div>

            {/* Title & Issuer Name */}
            <h3 className="text-white font-bold text-[20px] leading-tight min-h-[50px] group-hover:text-accent transition-colors duration-300">
              {name}
            </h3>
            <p className="text-accent text-[14px] font-semibold tracking-wider mt-1.5 uppercase">
              {issuer}
            </p>

            {/* Skills learned */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full text-secondary bg-white/5 border border-white/5 hover:bg-accent/5 hover:border-accent/10 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
            <motion.a
              href={pdf_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-bold text-accent hover:text-white transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
            >
              <span>View Certificate</span>
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These certifications validate my technical foundations, programming skills, and 
        hands-on experience with modern tools, databases, and testing environments.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {certifications.map((cert, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...cert}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");

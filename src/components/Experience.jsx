import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.85)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.15)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
        borderRadius: "16px",
        padding: "24px 28px",
      }}
      contentArrowStyle={{
        borderRight: "8px solid rgba(145, 94, 255, 0.3)",
      }}
      date={
        <span className="text-secondary text-[14px] font-medium tracking-wide">
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(145, 94, 255, 0.3), 0 0 20px rgba(145, 94, 255, 0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold leading-snug">
          {experience.title}
        </h3>
        <p
          className="text-[#915EFF] text-[15px] font-semibold mt-1"
          style={{ margin: "6px 0 0 0" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] leading-[24px] flex items-start gap-2"
          >
            <span className="text-[#915EFF] mt-1 shrink-0">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.25)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

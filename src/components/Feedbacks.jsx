import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.65)}
      className="xs:w-[320px] w-full"
    >
      <div className="relative p-px rounded-3xl overflow-hidden group">
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(145,94,255,0.5), rgba(0,206,168,0.3))",
          }}
        />

        <div className="relative bg-black-200 p-8 rounded-3xl z-10">
          {/* Quote mark */}
          <p className="text-[#915EFF] font-black text-[56px] leading-none mb-2 select-none">
            &ldquo;
          </p>

          <p className="text-white tracking-wide text-[15px] leading-[26px]">
            {testimonial}
          </p>

          <div className="mt-6 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-semibold text-[15px]">
                <span className="text-[#915EFF]">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[13px]">
                {designation} · {company}
              </p>
            </div>

            <div className="relative">
              <img
                src={image}
                alt={`feedback-by-${name}`}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#915EFF]/40"
              />
              <div className="absolute -inset-1 rounded-full bg-[#915EFF]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[24px] overflow-hidden">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px]`}
        style={{
          background: "linear-gradient(135deg, #151030 0%, #1d1836 100%)",
        }}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-8 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

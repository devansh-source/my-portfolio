import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const InputField = ({ label, children }) => (
  <label className="flex flex-col gap-2">
    <span className="text-white font-medium text-[15px]">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Devansh",
          email: form.email,
          to_email: "panchal2824@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          setStatus("error");
        }
      );
  };

  const inputClass =
    "bg-[#1a1335] py-4 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF]/60 transition-colors duration-300 font-medium text-[15px] resize-none";

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/5"
        style={{
          background: "rgba(15, 12, 34, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </motion.div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <InputField label="Your Name">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className={inputClass}
            />
          </InputField>

          <InputField label="Your Email">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className={inputClass}
            />
          </InputField>

          <InputField label="Your Message">
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              required
              className={inputClass}
            />
          </InputField>

          {/* Status message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#00cea8] text-[14px] font-medium"
            >
              ✓ Thank you! I'll get back to you as soon as possible.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-[14px] font-medium"
            >
              ✕ Something went wrong. Please try again.
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-fit py-3 px-10 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #915EFF, #6b3fc4)",
              boxShadow: "0 4px 20px rgba(145, 94, 255, 0.4)",
            }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

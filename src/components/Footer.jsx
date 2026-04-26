import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/_devansh._.007/",
    label: "Instagram",
    hoverColor: "#E1306C",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/devansh-panchal-2312112ab/",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
  },
  {
    icon: FaGithub,
    href: "https://github.com/",
    label: "GitHub",
    hoverColor: "#ffffff",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full py-8 border-t border-white/5">
      {/* Subtle top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(145,94,255,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-secondary transition-colors duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
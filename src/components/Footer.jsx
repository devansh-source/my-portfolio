import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/_devansh._.007/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/devansh-panchal-2312112ab/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
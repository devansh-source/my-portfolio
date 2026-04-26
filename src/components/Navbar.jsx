import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Devansh{" "}
            <span className="text-[#915EFF] group-hover:text-white transition-colors duration-300">
              .
            </span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[17px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#915EFF] transition-all duration-300 ${
                  active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1d1836] hover:bg-[#915EFF]/20 transition-colors duration-300"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain"
            />
          </motion.button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-20 right-4 min-w-[180px] z-10 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(29, 24, 54, 0.95)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(145, 94, 255, 0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <ul className="list-none flex flex-col gap-1 p-4">
                  {navLinks.map((nav, idx) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className={`font-medium cursor-pointer text-[15px] px-3 py-2 rounded-lg transition-all duration-200 ${
                        active === nav.title
                          ? "text-white bg-[#915EFF]/20"
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

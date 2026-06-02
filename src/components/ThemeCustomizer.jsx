import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaCheck } from "react-icons/fa6";

const themes = [
  {
    id: "purple",
    name: "Purple",
    hex: "#915EFF",
    rgb: "145 94 255",
    dark: "#6b3fc4",
    light: "#a78bfa",
    bgClass: "bg-[#915EFF]",
  },
  {
    id: "cyan",
    name: "Cyan",
    hex: "#00d2ff",
    rgb: "0 210 255",
    dark: "#008bb3",
    light: "#80e5ff",
    bgClass: "bg-[#00d2ff]",
  },
  {
    id: "emerald",
    name: "Emerald",
    hex: "#00cea8",
    rgb: "0 206 168",
    dark: "#009479",
    light: "#66e3cb",
    bgClass: "bg-[#00cea8]",
  },
  {
    id: "orange",
    name: "Orange",
    hex: "#ff7f3f",
    rgb: "255 127 63",
    dark: "#d15317",
    light: "#ffb38f",
    bgClass: "bg-[#ff7f3f]",
  },
  {
    id: "pink",
    name: "Pink",
    hex: "#ff4081",
    rgb: "255 64 129",
    dark: "#c60055",
    light: "#ff80ab",
    bgClass: "bg-[#ff4081]",
  },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("purple");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem("portfolio-theme") || "purple";
    const theme = themes.find((t) => t.id === savedThemeId) || themes[0];
    setActiveTheme(theme.id);
    applyTheme(theme);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.style.setProperty("--color-accent", theme.hex);
    root.style.setProperty("--color-accent-rgb", theme.rgb);
    root.style.setProperty("--color-accent-dark", theme.dark);
    root.style.setProperty("--color-accent-light", theme.light);

    // Dynamic SVG Favicon matching the theme color
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="90" height="90" x="5" y="5" rx="22" fill="#0f0826" stroke="${theme.hex}" stroke-width="8"/>
          <path d="M35 30 L18 50 L35 70 M65 30 L82 50 L65 70" stroke="${theme.hex}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M44 70 L56 30" stroke="#ffffff" stroke-width="12" stroke-linecap="round" fill="none"/>
        </svg>
      `;
      favicon.href = `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
    }
  };

  const handleThemeChange = (theme) => {
    setActiveTheme(theme.id);
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme.id);
  };

  return (
    <div className="fixed right-5 top-[35%] z-50 flex items-center">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg border border-white/10 text-white transition-all duration-300"
        style={{
          background: "rgba(29, 24, 54, 0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 20px rgb(var(--color-accent-rgb) / 0.3)",
        }}
        aria-label="Toggle Theme Customizer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPalette className="text-[20px] text-accent" />
        </motion.div>
      </motion.button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-16 p-5 rounded-2xl min-w-[200px] border border-white/10"
            style={{
              background: "rgba(20, 16, 44, 0.9)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h4 className="text-white text-[15px] font-bold mb-3 tracking-wide border-b border-white/5 pb-2">
              Select Accent Color
            </h4>
            <div className="flex flex-col gap-2.5">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme)}
                  className={`flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-300 hover:bg-white/5 group text-left`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center relative ${theme.bgClass}`}
                    style={{
                      boxShadow: activeTheme === theme.id ? `0 0 10px ${theme.hex}` : "none",
                    }}
                  >
                    {activeTheme === theme.id && (
                      <FaCheck className="text-white text-[10px]" />
                    )}
                  </div>
                  <span
                    className={`text-[13px] font-medium transition-colors duration-300 ${
                      activeTheme === theme.id ? "text-white" : "text-secondary group-hover:text-white"
                    }`}
                  >
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeCustomizer;

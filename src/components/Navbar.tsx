"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

interface ResumeLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLinks: ResumeLink[] = [
    { name: "Software Engineer Resume", href: "/Harshad_Resume_Software_Development.pdf" },
    { name: "Software Tester Resume", href: "/Harshad_Resume_Software_Testing.pdf" },
    { name: "Java Developer Resume", href: "/Harshad_Resume_Java_Development.pdf" },
    { name: "Python Developer Resume", href: "/Harshad_Resume_Python_Development.pdf" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled
        ? "glass py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl md:text-2xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#ff5d5d] via-[#ff8585] to-[#e0e1dd] tracking-wider hover:scale-[1.02] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[#ff5d5d] rounded-lg px-2 hover-glow"
          aria-label="Harshad Dhongade - Home"
        >
          HARSHAD
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[#e0e1dd] hover:text-[#ff5d5d] relative transition duration-300 group py-2 focus-visible:ring-2 focus-visible:ring-[#ff5d5d] rounded-md px-1"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff5d5d] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          {/* Resume Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setResumeOpen(true)}
            onMouseLeave={() => setResumeOpen(false)}
          >
            <button
              className="px-5 py-2.5 bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30 rounded-full flex items-center gap-1.5 hover:bg-[#ff5d5d] hover:text-[#0d1b2a] hover:border-[#ff5d5d] font-bold tracking-wide transition-all duration-300 shadow-sm"
              onClick={() => setResumeOpen(!resumeOpen)}
              aria-expanded={resumeOpen}
              aria-haspopup="true"
              aria-label="Download Resume options"
            >
              <FileText size={16} /> Resume <ChevronDown size={14} className={`transition-transform duration-300 ${resumeOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-64 bg-[#1b263b]/95 border border-[#415a77] rounded-xl shadow-2xl py-2 overflow-hidden backdrop-blur-md"
                >
                  {resumeLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-5 py-3 hover:bg-[#415a77]/30 text-[#e0e1dd] hover:text-[#ff5d5d] text-sm font-medium transition-colors"
                      download
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-[#ff5d5d] focus:outline-none p-2 focus-visible:ring-2 focus-visible:ring-[#ff5d5d] rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-[#0d1b2a] border-t border-[#415a77]/40 px-6 pt-4 pb-8 space-y-3 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#e0e1dd] hover:text-[#ff5d5d] py-2.5 text-lg font-semibold border-b border-[#415a77]/30"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <span className="block text-xs font-mono text-[#415a77] uppercase tracking-widest pl-1">Download Resume</span>
              {resumeLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 w-full justify-center px-5 py-3 border border-[#ff5d5d]/40 text-[#ff5d5d] hover:bg-[#ff5d5d] hover:text-[#0d1b2a] font-bold rounded-full transition duration-300 text-sm"
                  download
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={16} /> {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

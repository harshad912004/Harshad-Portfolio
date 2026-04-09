import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLinks = [
    { name: "Data Analyst Resume", href: "/Harshad_Resume_Data_Analyst.pdf" },
    { name: "Software Developer Resume", href: "/Harshad_Resume_Software_Development.pdf" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-400 hover:text-orange-300 transition duration-300 cursor-pointer tracking-wide">
          Harshad Dhongade
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm lg:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-orange-400 relative transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          {/* Resume Dropdown */}
          <li className="relative group">
            <button
              className="px-4 py-2 bg-orange-500/10 text-orange-400 border border-orange-500/50 rounded-full flex items-center hover:bg-orange-500 hover:text-gray-900 transition-all duration-300"
              onClick={() => setResumeOpen(!resumeOpen)}
              onMouseEnter={() => setResumeOpen(true)}
            >
              Resume <ChevronDown size={16} className="ml-1" />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 overflow-hidden"
                  onMouseLeave={() => setResumeOpen(false)}
                >
                  {resumeLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 hover:bg-gray-800 text-gray-200 text-sm transition-colors"
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
          className="md:hidden text-orange-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
            className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-orange-400 py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              {resumeLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block w-full text-center px-4 py-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900 rounded-full font-semibold transition duration-300"
                  download
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
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

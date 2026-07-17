"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, ArrowRight, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6 md:px-10 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
        
        {/* Left: Text Content (7 cols on md+) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:col-span-7"
        >
          <div className="inline-flex px-4 py-2 border border-orange-500/30 bg-orange-500/10 rounded-full mb-6 font-mono text-orange-400 text-sm tracking-wider">
            Hello, World! I'm
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-none">
            Harshad Dhongade
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">
            Software Engineer
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Software Engineer specializing in building scalable full-stack web applications. Dedicated to writing clean, maintainable code, designing robust APIs, and optimizing database systems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-gray-950 font-bold rounded-full transition-all duration-300 hover-glow flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshad912004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-800 bg-gray-900/50 rounded-full text-gray-300 hover:text-orange-400 transition-all focus-visible:ring-2 focus-visible:ring-orange-500 hover-glow"
                aria-label="GitHub Profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/harshad-dhongade"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-800 bg-gray-900/50 rounded-full text-gray-300 hover:text-orange-400 transition-all focus-visible:ring-2 focus-visible:ring-orange-500 hover-glow"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image (5 cols on md+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end md:col-span-5 relative group"
        >
          <div className="relative -ml-6 w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-gray-800 group-hover:border-orange-500/50 transition-colors duration-500">
            <Image
              src="/HD_Photo_New.jpg"
              alt="Harshad Dhongade"
              fill
              sizes="(max-w-768px) 256px, 288px"
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Decorative spinning ring */}
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-[320px] sm:h-[320px] border border-orange-500/20 rounded-full animate-[spin_12s_linear_infinite] group-hover:border-orange-500/50 transition-colors duration-500 pointer-events-none"></div>
          <div className="absolute inset-0 m-auto w-80 h-80 sm:w-[350px] sm:h-[350px] border border-dashed border-gray-800 rounded-full animate-[spin_18s_linear_infinite_reverse] pointer-events-none"></div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hidden md:block"
      >
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown size={28} className="hover:text-orange-400 transition-colors" />
        </a>
      </motion.div>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-orange-500/80 hover:bg-orange-400 text-gray-950 shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </section>
  );
};

export default Hero;
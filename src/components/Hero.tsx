"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowUp } from "lucide-react";
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
    <header
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6 md:px-10 bg-gradient-to-b from-[var(--background)] via-[var(--bg-card)] to-[var(--background)] relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[var(--accent-coral)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--border-slate)]/25 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:col-span-7"
        >
          <div className="inline-flex px-4 py-2 border border-[var(--accent-coral)]/30 bg-[var(--accent-coral)]/10 rounded-full mb-6 font-mono text-[var(--accent-coral)] text-sm tracking-wider">
            Hello, World! I&apos;m
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[var(--foreground)] mb-4 tracking-tight leading-none">
            Harshad Dhongade
          </h1>
          <p className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-gradient">
            Software Engineer & Full Stack Developer
          </p>

          <p className="text-[var(--foreground)]/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Welcome to the official portfolio of <strong>Harshad Dhongade</strong>. Software Engineer specializing in building scalable full-stack web applications, writing clean maintainable code, designing robust APIs, and optimizing database systems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[var(--accent-coral)] hover:bg-[#ff8585] text-[var(--foreground)] font-bold rounded-full transition-all duration-300 hover-glow flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshad912004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[var(--border-slate)] bg-[var(--bg-card)]/90 rounded-full text-[var(--foreground)] hover:text-[var(--accent-coral)] hover:border-[var(--accent-coral)] transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] hover-glow"
                aria-label="Harshad Dhongade GitHub Profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/harshad-dhongade"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[var(--border-slate)] bg-[var(--bg-card)]/90 rounded-full text-[var(--foreground)] hover:text-[var(--accent-coral)] hover:border-[var(--accent-coral)] transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] hover-glow"
                aria-label="Harshad Dhongade LinkedIn Profile"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end md:col-span-5 relative group"
        >
          <div className="relative -ml-6 w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-[var(--border-slate)] group-hover:border-[var(--accent-coral)] transition-colors duration-500">
            <Image
              src="/HD_Photo_New.jpg"
              alt="Harshad Dhongade - Software Engineer & Full Stack Developer"
              fill
              sizes="(max-w-768px) 256px, 288px"
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Decorative spinning ring */}
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-[320px] sm:h-[320px] border border-[var(--accent-coral)]/30 rounded-full animate-[spin_12s_linear_infinite] group-hover:border-[var(--accent-coral)] transition-colors duration-500 pointer-events-none"></div>
          <div className="absolute inset-0 m-auto w-80 h-80 sm:w-[350px] sm:h-[350px] border border-dashed border-[var(--border-slate)] rounded-full animate-[spin_18s_linear_infinite_reverse] pointer-events-none"></div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--border-slate)] hidden md:block"
      >
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown size={28} className="hover:text-[var(--accent-coral)] transition-colors" />
        </a>
      </motion.div>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[var(--accent-coral)] hover:bg-[#ff8585] text-[var(--foreground)] shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </header>
  );
};

export default Hero;

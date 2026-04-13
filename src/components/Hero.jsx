import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6 md:px-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 border border-orange-500/30 bg-orange-500/10 rounded-full mb-6 font-mono text-orange-400 text-sm tracking-wider">
            Hello, World! I'm
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Harshad Dhongade
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            Associate Software Engineer <br className="hidden sm:block" />& Data Analyst
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Turning data into insights and building scalable, intelligent solutions. Bridging the gap between software development and data analytics.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="#contact"
              className="px-8 py-3 bg-orange-500 text-gray-900 font-bold rounded-full transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transform hover:-translate-y-1"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/harshad912004"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-gray-700 bg-gray-800/50 hover:bg-gray-700 hover:border-orange-500/50 rounded-full text-white transition-all hover:text-orange-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/harshad-dhongade"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-gray-700 bg-gray-800/50 hover:bg-gray-700 hover:border-orange-500/50 rounded-full text-white transition-all hover:text-orange-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative group"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-gray-800 group-hover:border-orange-500/50 transition-colors duration-500">
            <img
              src="HD_Photo_New.jpg"
              alt="Harshad Dhongade"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Decorative spinning ring */}
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-orange-500/50 transition-colors duration-500"></div>
          <div className="absolute inset-0 m-auto w-80 h-80 sm:w-[420px] sm:h-[420px] border border-dashed border-gray-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

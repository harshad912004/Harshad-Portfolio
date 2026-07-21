"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#415a77]/40 bg-[#0d1b2a] py-10 px-6 text-center text-[#e0e1dd]/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg text-[#e0e1dd]/80">
            &copy; 2024 - {new Date().getFullYear()} Harshad Dhongade. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/harshad912004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#415a77] hover:text-[#ff5d5d] transition-colors p-2 focus-visible:ring-1 focus-visible:ring-[#ff5d5d] rounded"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/harshad-dhongade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#415a77] hover:text-[#ff5d5d] transition-colors p-2 focus-visible:ring-1 focus-visible:ring-[#ff5d5d] rounded"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
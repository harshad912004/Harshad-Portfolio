"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-900 bg-black py-10 px-6 text-center text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Harshad Dhongade. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/harshad912004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-400 transition-colors p-2 focus-visible:ring-1 focus-visible:ring-orange-500 rounded"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/harshad-dhongade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-400 transition-colors p-2 focus-visible:ring-1 focus-visible:ring-orange-500 rounded"
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
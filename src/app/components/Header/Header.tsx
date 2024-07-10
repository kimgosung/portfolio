"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/home"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/education"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Education
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/skills"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/projects"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/awards"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Awards
            </Link>
          </motion.div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/home"
            className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/education"
            className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300"
          >
            Education
          </Link>
          <Link
            href="/skills"
            className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/awards"
            className="block text-white py-2 px-4 hover:bg-purple-600 transition duration-300"
          >
            Awards
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

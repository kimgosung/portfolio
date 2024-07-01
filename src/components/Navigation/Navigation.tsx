"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-apple-dark">
            kimgosung
          </Link>
        </motion.div>
        <ul className="flex space-x-8">
          {["Projects", "Skills", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-apple-dark hover:text-apple-blue transition duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

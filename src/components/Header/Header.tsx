"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <header className="w-full bg-white backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 flex justify-between items-center max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-['GmarketSansBold']">김고성</h1>
        </motion.div>
      </nav>
    </header>
  );
};

export default ProfileSection;

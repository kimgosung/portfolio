"use client";

import { motion } from "framer-motion";
import IntroducePage from "./Landing/Page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-apple-dark">
      <main>
        <IntroducePage />
      </main>
    </div>
  );
}

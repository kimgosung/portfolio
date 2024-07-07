"use client";

import React from "react";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl md:text-5xl font-bold mb-6">
          <AnimatedText
            text="안녕하세요 프론트엔드 개발자 김고성입니다."
            speed={70}
          />
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
          안녕하세요
        </p>
        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-opacity-90 transition duration-300 cursor-pointer"
          >
            저에 대해 궁금하신가요?
          </Link>
        </motion.div>
      </div>

      <motion.div
        id="about"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
          간략한 소개
        </h2>
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
          안녕하십니까! 끊임 없이 도전하고 항상 무엇이든 궁금해하는 프론트엔드
          개발자 김고성입니다. 프론트엔드 개발자는 사용자와 개발자를
          연결시켜주는 다리와 같은 역할을 한다고 생각합니다. 사용자들과 끊임없는
          소통을 통해 어제의 저보다는 한 발자국 나아가고 싶습니다. 저는 소통과
          협업을 중요시하며, 항상 배움에는 열려있습니다. 질문하기 위해 그리고
          질문하기 위해 공부하는 개발자가 되고 싶습니다. 또한, 저의 장점인 개발
          능력을 이용해 다른 팀원들의 부족한 점을 채워주고 서로 돕고 돕는 관계로
          같이 성장하는 사람이 되고 싶습니다.
        </p>
      </motion.div>
    </div>
  );
}

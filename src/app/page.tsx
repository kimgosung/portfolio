"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBlogger,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBirthdayCake,
  FaUser,
} from "react-icons/fa";
import Card from "./components/Card/Card";
import { AnimatedText } from "animated-text-kimgosung";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-100 to-purple-200">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl md:text-5xl font-bold mb-6">
          <AnimatedText
            text="안녕하세요 프론트엔드 개발자 김고성입니다."
            speed={70}
          />
        </h1>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/kimgosung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/%EA%B3%A0%EC%84%B1-%EA%B9%80-12410a289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://kimgosung.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            <FaBlogger size={40} />
          </a>
        </div>
        <motion.div
          className="mt-8 md:mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
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
        </motion.div>
      </div>
      <motion.div
        id="about"
        className="min-h-screen flex flex-col items-center justify-center text-center min-w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          저를 소개합니다
        </h2>
        <p className="text-base md:text-xl text-gray-800 mb-10 max-w-4xl font-['GmarketSansLight']">
          안녕하십니까! 끊임 없이 도전하고 항상 무엇이든 궁금해하는 프론트엔드
          개발자 김고성입니다. 프론트엔드 개발자는 사용자와 개발자를
          연결시켜주는 다리와 같은 역할을 한다고 생각합니다. 사용자들과 끊임없는
          소통을 통해 어제의 저보다는 한 발자국 나아가고 싶습니다. 저는 소통과
          협업을 중요시하며, 항상 배움에는 열려있습니다. 질문하기 위해 그리고
          질문하기 위해 공부하는 개발자가 되고 싶습니다. 또한, 저의 장점인 개발
          능력을 이용해 다른 팀원들의 부족한 점을 채워주고 서로 돕고 돕는 관계로
          같이 성장하는 사람이 되고 싶습니다.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 mt-10 max-w-4xl w-full text-left">
          <h3 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4 text-center">
            Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md"
            >
              <FaMapMarkerAlt className="text-white mr-4" size={24} />
              <span className="text-sm md:text-md font-['GmarketSansLight']">
                서울 성동구 행당동
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md"
            >
              <FaEnvelope className="text-white mr-4" size={24} />
              <span className="text-sm md:text-md font-['GmarketSansLight']">
                rlarhtjd0123@gmail.com
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow-md"
            >
              <FaBirthdayCake className="text-white mr-4" size={24} />
              <span className="text-sm md:text-md font-['GmarketSansLight']">
                2000년 10월 22일(만 23세)
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md"
            >
              <FaUser className="text-white mr-4" size={24} />
              <span className="text-sm md:text-md font-['GmarketSansLight']">
                ISTJ
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

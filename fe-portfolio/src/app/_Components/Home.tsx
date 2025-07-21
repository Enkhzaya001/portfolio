"use client";
import { motion } from "framer-motion";
import { useLanguage } from "./UserProvider";

const text: Record<
  "en" | "jp",
  {
    title: string;
    intro: string;
    button: string;
    title2: string;
    intro2: string;
    intro3: string;
  }
> = {
  en: {
    title: "Welcome to my",
    title2: "Portfolio",
    intro: "Hi, I’m",
    intro2: "Enkhzaya.",
    intro3:
      "I’m on a journey to become a full-stack developer, starting with the fundamentals of web technologies.",
    button: "about me",
  },
  jp: {
    title: "ようこそ! ",
    intro: "こんにちは。",
    intro2: "エンプザヤと申します。",
    intro3:
      "フルスタックエンジニアになることを目指し、Web技術の基礎から学習を進めています。",
    title2: "私のポートフォリオ",
    button: "私について",
  },
};

export default function Home() {
  const language = useLanguage().language as "en" | "jp";
  return (
    <section className=" md:flex justify-center items-center">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex-1  mt-10 md:mr-30 md:mt-0 flex justify-center"
      >
        <img
          src="/myPhoto.jpg"
          alt="Developer Visual"
          className="w-50 md:w-[300px] h-auto rounded-full"
        />
      </motion.div>
      <div className="flex-1 space-y-6 text-center md:text-left ">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          {text[language].title}
          <span className="text-pink-400 p-2">{text[language].title2}</span>
        </motion.h1>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg max-w-md"
        >
          {text[language].intro}
          <span className="text-pink-300 font-semibold p-1">
            {text[language].intro2}
          </span>
          {text[language].intro3}
        </motion.p>
        <motion.a
          href={"/about"}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-pink-500 px-6 py-2 text-white font-semibold rounded-full shadow hover:bg-pink-600 transition"
        >
          {text[language].button}
        </motion.a>
      </div>
    </section>
  );
}

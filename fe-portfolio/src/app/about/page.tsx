"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../_Components/UserProvider";

const text: Record<
  "en" | "jp",
  {
    about: string;
    about2: string;
    about3: string;
    about4: string;
    about5: string;
  }
> = {
  en: {
    about:
      "Hello, I'm Enkhzaya, a 25-year-old aspiring software engineer from Mongolia.",
    about2:
      "In 2021, I graduated from the Mongolian University of Science and Technology with a major in Aerospace Engineering.  After that, I worked in Japan for about two and a half years as a mechanical design engineer, where I was involved in product design and drafting.",
    about3:
      "During that time, I used CAD software such as AutoCAD and SolidWorks to create 2D and 3D drawings, gaining fundamental experience and skills in the field of mechanical design.",
    about4:
      "As we live in an era of rapid technological advancement, I have developed a deep interest in software engineering.  To pursue greater goals, I decided to take on the challenge of entering a new field. I am currently based in Mongolia and actively studying to become a software engineer.",
    about5:
      "Moving forward, I hope to grow continuously by gaining hands-on experience in software development. Thank you for visiting my portfolio!",
  },
  jp: {
    about: "はじめまして。エンフザヤと申します。現在26歳で、モンゴル出身です。",
    about2:
      "2021年にモンゴル科学技術大学の航空エンジニア専攻を卒業し、その後約2年半にわたり日本で機械設計エンジニアとして、製品のデザインおよび図面作成業務に携わってまいりました。",
    about3:
      "業務では、AutoCADやSolidWorksなどのCADソフトを使用し、2D・3D図面の作成や製品設計を担当。機械設計分野において基礎的な経験とスキルを身につけることができました。",
    about4:
      "現在、技術革新が著しい時代の中で、私が最も関心を持っている分野の一つがソフトウェアエンジニアリングです。より高い目標に挑戦するために、新たな分野に飛び込む決意をし、現在はモンゴルでソフトウェアエンジニアを目指して日々学習に励んでおります。",
    about5:
      "今後はソフトウェア開発の分野で経験を積みながら、成長し続けていきたいと考えております。どうぞよろしくお願いいたします。",
  },
};

export default function About() {
  const language = useLanguage().language as "en" | "jp";
  return (
    <section className="p-3 md:relative md:top-6 md:flex">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex mb-10 flex-col justify-center items-center md:mr-60   "
      >
        <img
          src="/myPhoto.jpg"
          alt="Developer Visual"
          className="w-50 md:w-[300px] h-auto rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="backdrop-blur-4xl shadow-2xl rounded-xl p-3 md:w-[500px] md:space-y-6 md:text-left 
  border border-white/10 bg-white/5 ring-1 ring-white/10"
      >
        <p>{text[language].about}</p>
        <p>{text[language].about2}</p>
        <p>{text[language].about3}</p>
        <p>{text[language].about4}</p>
        <p>{text[language].about5}</p>
      </motion.div>
    </section>
  );
}

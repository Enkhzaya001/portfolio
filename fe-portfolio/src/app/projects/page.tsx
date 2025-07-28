"use client";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "../_Components/UserProvider";

const projects = [
  {
    title: "Weather App",
    description: "A simple weather forecast app with real-time data fetching.",
    description2:
      "こちらは、リアルタイムで天気予報のデータを取得するシンプルな天気アプリです。",
    link: "https://weather-seven-kappa-77.vercel.app",
    stack: [<FaHtml5 />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    title: "Movie App",
    description:
      "Browse movies by genre and view detailed info with modern UI.",
    description2:
      "ジャンル別に映画を探し、モダンなUIで詳細情報を閲覧できる映画アプリです。",
    link: "https://movie-app-ten-flame.vercel.app",
    stack: [<FaReact />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    title: "Food Delivery App",
    description: "A full-stack food ordering system with cart and admin panel.",
    description2:
      "カート機能と管理者パネルを備えたフルスタックのフード注文システムです。",
    link: "https://food-delivery-nine-ruddy.vercel.app",
    stack: [
      <FaReact />,
      <SiTailwindcss />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
    ],
  },
  {
    title: "Buy Me a Coffee",
    description: "Donation-based app using PostgreSQL and Prisma backend.",
    description2:
      "PostgreSQL と Prisma をバックエンドに使用した寄付型のアプリです。",
    link: "buy-me-coffee-green.vercel.app",
    stack: [
      <FaReact />,
      <FaNodeJs />,
      <SiExpress />,
      <SiPostgresql />,
      <SiPrisma />,
    ],
  },
];

export default function Projects() {
  const { language, setLanguage } = useLanguage();
  return (
    <section className="py-10 px-4 space-y-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      {projects.map((proj, idx) => (
        <Card
          key={idx}
          className="md:flex flex-col md:flex-row justify-between items-center md:items-center gap-4 p-5 border bg-white/5 backdrop-blur-md shadow-lg"
        >
          <CardContent className="flex-1 space-y-1 text-white">
            <p className="text-xl font-semibold">{proj.title}</p>
            {language === "en" ? (
              <p className="text-sm text-gray-300">{proj.description}</p>
            ) : (
              <p className="text-sm text-gray-300">{proj.description2}</p>
            )}

            <a
              href={proj.link}
              target="_blank"
              className="text-sm text-blue-400 underline"
            >
              Link: {proj.link.replace(/^https?:\/\//, "")}
            </a>
          </CardContent>
          <div className="flex  justify-center gap-3 text-xl text-purple-400">
            {proj.stack.map((Icon, i) => (
              <span key={i}>{Icon}</span>
            ))}
          </div>
        </Card>
      ))}
    </section>
  );
}

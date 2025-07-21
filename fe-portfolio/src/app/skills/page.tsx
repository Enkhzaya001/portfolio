
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import {
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className=" backdrop-blur-4xl shadow-2xl rounded-xl text-white py-20 px-6 text-center border border-white/10 bg-white/5 ring-1 ring-white/10">
      <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-10 text-5xl text-pink-400">
        <FaReact />
        <SiTypescript />
        <SiTailwindcss />
        <SiExpress />
        <SiJavascript />
        <FaNodeJs />
        <SiPostgresql />
        <SiPrisma />
        <SiMongodb />
        <FaGithub />
      </div>
    </section>
  );
};
export default Skills;

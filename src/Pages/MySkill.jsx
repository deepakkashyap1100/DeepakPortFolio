import React from "react";
import { FaReact, FaBootstrap, FaGitAlt, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssLight } from "react-icons/pi";
import { BiLogoJquery } from "react-icons/bi";
import { SiMui, SiPhp } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

// Image imports
import tailwindicon from "../images/tailwindcss-icon.svg";
import reduxicon from "../images/redux-original.svg";
import { CgFigma } from "react-icons/cg";
import mysqlicon from "../images/mysql.png";
import { SiTypescript } from "react-icons/si";
import ajax from "../images/ajax.png";
import { SiNextdotjs } from "react-icons/si";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

const skills = [
  { name: "React", icon: <FaReact size={44} className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={44} className="text-blue-900" /> },
  { name: "Tailwind CSS", img: tailwindicon },
  { name: "Redux Toolkit", img: reduxicon },
  { name: "Material UI", icon: <SiMui size={44} className="text-sky-500" /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={44} className="text-yellow-400" /> },
  { name: "HTML", icon: <TiHtml5 size={44} className="text-red-600" /> },
  { name: "CSS", icon: <PiFileCssLight size={44} className="text-blue-600" /> },
  { name: "PHP", icon: <SiPhp size={44} className="text-blue-500" /> },
  { name: "MySQL", img: mysqlicon },
  { name: "AJAX", img: ajax },
  { name: "Bootstrap", icon: <FaBootstrap size={44} className="text-blue-800" /> },
  { name: "JQuery", icon: <BiLogoJquery size={44} className="text-pink-600" /> },
  { name: "Type Script", icon: <SiTypescript size={40} className="text-teal-600" /> },
  { name: "Git", icon: <FaGitAlt size={44} className="text-orange-600" /> },
  { name: "WordPress", icon: <FaWordpress size={44} className="text-sky-600" /> },
  { name: "Photoshop", icon: <DiPhotoshop size={44} className="text-blue-950" /> },
  { name: "Figma", icon: <CgFigma size={44} className="text-pink-600" /> },
];

const MySkill = () => {
  return (
    <section className="  pt-10 md:pt-20">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
              <HiMiniCodeBracketSquare className="text-4xl text-teal-600 dark-theme:text-teal-400" />
              <div className="h-1 w-12 bg-gradient-to-l from-teal-500 to-teal-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark-theme:text-white mb-3">
              Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 dark-theme:from-teal-400 dark-theme:to-teal-300">
                Skill </span>
            </h2>
            <p className="text-gray-600 dark-theme:text-gray-300 text-lg">My professional journey and achievements</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-gray-100 flex items-center gap-3 rounded-md hover:shadow-md transition min-h-[54px]"
            >
              {skill.icon ? (
                skill.icon
              ) : (
                <img src={skill.img} alt={skill.name} width={44} />
              )}

              <span className="font-medium text-[15px]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkill;

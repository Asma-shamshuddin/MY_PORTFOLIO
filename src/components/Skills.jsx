import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      icon: <FaJava />,
      name: "Java",
      color: "text-orange-500",
      level: "Intermediate",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "text-cyan-400",
      level: "Intermediate",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "text-yellow-400",
      level: "Intermediate",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "text-orange-500",
      level: "Advance",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: "text-blue-500",
      level: "Advance",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "text-sky-400",
      level: "Intermediate",
    },
    {
      icon: <FaGithub />,
      name: "Git & GitHub",
      color: darkMode ? "text-white" : "text-gray-800",
      level: "Beginner",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      color: "text-pink-500",
      level: "Intermediate",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h1
            className={`text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <p
            className={`mt-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies I use to build modern web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className={`group backdrop-blur-xl border rounded-3xl p-8 text-center hover:border-purple-500 hover:shadow-[0_0_25px_#8b5cf6] transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-[#0B1023]/80 border-purple-500/20"
                  : "bg-white/80 border-purple-200"
              }`}
            >

              {/* Icon */}
              <div
                className={`text-5xl flex justify-center ${skill.color} group-hover:scale-125 transition duration-300`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h2
                className={`text-xl font-semibold mt-5 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {skill.name}
              </h2>

              {/* Level */}
              <h2
                className={`text-xl font-semibold mt-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {skill.level}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;
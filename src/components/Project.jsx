import React from "react";

import gallery from "../assets/gallery.png";
import tictactoe from "../assets/tictactoe.png";
import stopwatch from "../assets/Stopwatch.png";
import food from "../assets/food.png";
import todo from "../assets/todo.png";
import protfolio  from "../assets/protfolio.png";

const projects = [
  {
    title: "To-Do App",
    image: todo,
    description:
      "A task management application with add, edit, delete, priority management, and local storage support.",
    tech: ["React", "TailwindCSS", "Local Storage"],
    demo: "https://todoapp-asma.netlify.app",
    github: "https://github.com/Asma-shamshuddin/SCT_WD_04",
  },

  {
    title: "Tic Tac Toe Game",
    image: tictactoe,
    description:
      "Play against a friend or computer with score tracking, winner detection, reset functionality, and responsive gameplay.",
    tech: ["TailwindCSS", "React.js" ,"HTML5", "CSS"],
    demo: "https://tic-tac-toe-asma.netlify.app",
    github: "https://github.com/Asma-shamshuddin/SCT_WD_03",
  },

  {
    title: "Stopwatch Timer",
    image: stopwatch,
    description:
      "A digital stopwatch featuring Start, Pause, Reset, and Lap functions with a clean and responsive interface.",
    tech: ["TailwindCSS", "React.js"],
    demo: "https://stopwatchtimer-asma.netlify.app",
    github: "https://github.com/Asma-shamshuddin/SCT_WD_02",
  },

  {
    title: "Responsive Food Landing Page",
    image: food,
    description:
      "A modern food restaurant landing page with responsive layout, attractive UI, smooth animations, and mobile-first design.",
    tech: ["React", "Tailwind CSS" , "JavaScript", "Framer Motion" ],
    demo: "https://resposivefoodlandingpage.netlify.app/",
    github: "https://github.com/Asma-shamshuddin/SCT_WD_01",
  },

  {
    title: "Gallery Project",
    image: gallery,
    description:
      "A responsive image gallery with a clean grid layout, smooth hover animations, and mobile-friendly design.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    demo: "#",
    github: "https://github.com/Asma-shamshuddin/GallaryProjectmadebyasma",
  },
  {
    title: "My protfolio",
    image: protfolio,
    description:
      "Responsive personal portfolio built with React.js and Tailwind CSS, showcasing my skills, projects, certifications, and software development journey.",
    tech: ["HTML", "CSS", "React.js", "Tailwind CSS", "EmailJS" , "Framer MOtion", ],
    demo: "#",
    github: "https://github.com/Asma-shamshuddin/GallaryProjectmadebyasma",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-10">

          <h2
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span className="text-purple-400">Projects</span>
          </h2>

          <a
            href="https://github.com/Asma-shamshuddin"
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-purple-500 px-5 py-2 rounded-xl hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            View All Projects →
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`border rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-purple-500/20 ${
                darkMode
                  ? "bg-[#0b1023]/70 border-purple-500/20"
                  : "bg-white/80 border-purple-200"
              }`}
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                {/* Title */}
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-7 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-500 border border-purple-500/30"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-95 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 rounded-lg border border-purple-500 hover:bg-purple-600 hover:text-white transition ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
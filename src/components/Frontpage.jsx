import React from "react";
import asma from "../assets/asma.png";

const Frontpage = ({ darkMode }) => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 lg:px-20 pt-28">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        {/* Welcome */}
        <p
          className={`text-lg mb-4 ${
            darkMode ? "text-purple-300" : "text-purple-600"
          }`}
        >
          Welcome to my portfolio 👋
        </p>

        {/* Heading */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hi, I'm
          <br />

          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Asma Begum
          </span>
        </h1>

        {/* Profession */}
        <h2
          className={`mt-5 text-xl md:text-2xl lg:text-3xl font-semibold ${
            darkMode ? "text-purple-300" : "text-purple-600"
          }`}
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p
          className={`mt-6 leading-8 max-w-xl mx-auto lg:mx-0 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I build responsive web applications while continuously learning
          and exploring modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">

          {/* View My Work */}
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-95 transition"
          >
            View My Work
          </button>

          {/* Contact Me */}
          <a href="#contact">
            <button
              className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:scale-95 transition text-white font-semibold"
            >
              Contact Me
            </button>
          </a>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center">

        <div className="relative flex items-center justify-center h-112.5 sm:h-112.5 lg:h-162.5">

          {/* Purple Glow */}
          <div className="absolute w-62.5 h-62.5 sm:w-87.5 sm:h-87.5 lg:w-112.5 lg:h-112.5 rounded-full bg-purple-500/20 blur-[100px]"></div>

          {/* Blue Glow */}
          <div className="absolute w-55 h-55 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-full bg-blue-500/20 blur-[100px]"></div>

          {/* Outer Ring */}
          <div className="absolute w-65 h-65 sm:w-90 sm:h-90 lg:w-117.5 lg:h-117.5 rounded-full border-[3px] border-purple-500 shadow-[0_0_70px_#8b5cf6]"></div>

          {/* Inner Ring */}
          <div className="absolute w-52.5 h-52.5 sm:w-72.5 sm:h-72.5 lg:w-95 lg:h-95 rounded-full border border-blue-300/30"></div>

          {/* Image */}
          <img
            src={asma}
            alt="Asma Begum"
            className="relative z-20 w-55 sm:w-75 md:w-125 lg:w-162.5 object-contain"
          />

        </div>
      </div>

    </div>
  );
};

export default Frontpage;
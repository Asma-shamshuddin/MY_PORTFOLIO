import asma from "../assets/asma.png";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";
import React, { useState } from "react";

const About = ({ darkMode }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section id="about" className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Main Card */}
        <div
          className={`backdrop-blur-xl border rounded-3xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-colors duration-300 ${
            darkMode
              ? "bg-[#0b1023]/70 border-purple-500/20"
              : "bg-white/80 border-purple-200"
          }`}
        >

          {/* Heading */}
          <h2
            className={`text-3xl font-bold mb-10 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="text-purple-400">📁</span> About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="flex justify-center">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl"></div>

                {/* Image */}
                <img
                  src={asma}
                  alt="Asma"
                  className="relative w-64 h-64 object-cover rounded-full border-4 border-purple-500 shadow-[0_0_30px_#8b5cf6]"
                />

              </div>

            </div>

            {/* Right */}
            <div>

              <p
                className={`leading-8 text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm a Computer Science Engineering student at
                <span className="text-purple-400 font-semibold">
                  {" "}VTU CPGS Kalaburagi
                </span>
                , passionate about building AI-powered and modern web
                applications. I enjoy solving real-world problems through
                technology and continuously improving my skills in Full
                Stack Development.
              </p>

              {/* Details */}
              <div className="mt-8 space-y-4">

                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <MapPin className="text-purple-400" size={20} />
                  Kalaburagi, Karnataka, India
                </div>

                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <GraduationCap className="text-purple-400" size={20} />
                  VTU CPGS Kalaburagi
                </div>

                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Briefcase className="text-purple-400" size={20} />
                  7th Semester CSE
                </div>

                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Target className="text-purple-400" size={20} />
                  Placement Aspirant 2027
                </div>

              </div>

              {/* Know More */}
              <button
                onClick={() => setShowAbout(true)}
                className="mt-10 px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition"
              >
                Know More About Me →
              </button>

            </div>
          </div>
        </div>

        {/* About Modal */}
        {showAbout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

            <div
              className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/30 p-8 shadow-[0_0_40px_rgba(139,92,246,0.25)] ${
                darkMode
                  ? "bg-[#0b1023]"
                  : "bg-white"
              }`}
            >

              {/* Close */}
              <button
                onClick={() => setShowAbout(false)}
                className={`absolute top-5 right-6 text-3xl hover:text-purple-400 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ✕
              </button>

              {/* Modal Heading */}
              <h1
                className={`text-4xl font-bold mb-10 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                About Me
              </h1>

              <div className="grid lg:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>

                  <div className="flex justify-center">
                    <img
                      src={asma}
                      alt="Asma"
                      className="w-60 h-60 rounded-full border-4 border-purple-500 object-cover shadow-[0_0_40px_#8b5cf6]"
                    />
                  </div>

                  <div className="mt-8 text-center">

                    <h2
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Asma Begum
                    </h2>

                    <p className="text-purple-400 mt-2">
                      Computer Science Engineering Student
                    </p>

                    <p
                      className={`mt-2 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Full Stack Developer
                    </p>

                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div>

                  <h2 className="text-2xl text-purple-400 font-semibold mb-5">
                    Hello 👋
                  </h2>

                  <p
                    className={`leading-8 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    I am a Computer Science Engineering student at
                    VTU CPGS Kalaburagi with a strong interest in
                    Full Stack Web Development.

                    I enjoy building responsive web applications,
                    learning modern technologies, and solving
                    real-world problems through software.

                    My goal is to become a Software Engineer and
                    contribute to impactful projects while
                    continuously improving my technical skills.
                  </p>

                </div>

              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {/* Education */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    🎓 Education
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    B.E Computer Science Engineering
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    VTU CPGS Kalaburagi
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    2023 - 2027
                  </p>
                </div>

                {/* Skills */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    💻 Skills
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ Java</p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ React.js</p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ HTML</p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ CSS</p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ JavaScript</p>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>✔ Tailwind CSS</p>
                </div>

                {/* Interests */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    🚀 Interests
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    • Full Stack Development
                  </p>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    • UI/UX Design
                  </p>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    • Problem Solving
                  </p>
                </div>

                {/* Experience */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    🏆 Experience
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    Web Development Internship
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    SkillCraft Technology
                  </p>
                </div>

                {/* Career Goal */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    🎯 Career Goal
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    To become a Full Stack Software Engineer and
                    build innovative applications that solve
                    real-world problems.
                  </p>
                </div>

                {/* Languages */}
                <div
                  className={`rounded-2xl p-6 ${
                    darkMode ? "bg-[#141b34]" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">
                    🌍 Languages
                  </h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    English
                  </p>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    Hindi
                  </p>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    Urdu
                  </p>

                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    Kannada
                  </p>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-5 mt-12">

                <a
                  href="/Asma-resume-.jpg"
                  download="Asma_Begum_Resume.jpg"
                  className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white hover:scale-95 transition font-semibold"
                >
                  Download Resume
                </a>

                <button
                  onClick={() => setShowAbout(false)}
                  className="px-8 py-3 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
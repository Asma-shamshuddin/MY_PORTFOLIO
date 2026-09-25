import React, { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import logo from "../assets/logo.png";

const Navber = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        darkMode
          ? "bg-[#050816]/70 border-white/10"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="AB logo"
              className="w-12 h-12 rounded-full"
            />

            <h2
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Asma <span className="text-purple-400">Begum</span>
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-[17px] font-medium transition ${
                  darkMode
                    ? "text-white hover:text-purple-400"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {item}

                {index === 0 && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-purple-500 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">

            {/* Theme Toggle */}
            <div
              className={`flex items-center gap-3 border rounded-xl px-4 py-2 ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              {/* Light Mode */}
              <button
                onClick={() => setDarkMode(false)}
                className="text-yellow-500 hover:scale-110 transition"
                title="Light Mode"
              >
                <Sun size={18} />
              </button>

              {/* Dark Mode */}
              <button
                onClick={() => setDarkMode(true)}
                className={`hover:scale-110 transition ${
                  darkMode ? "text-white" : "text-gray-500"
                }`}
                title="Dark Mode"
              >
                <Moon size={18} />
              </button>
            </div>

            {/* Resume */}
            <a
              href="/Asma-resume-.jpg"
              download="Asma_Begum_Resume.jpg"
              className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white hover:scale-105 transition"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden border-t ${
            darkMode
              ? "bg-[#050816] border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col px-6 py-5 gap-5">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={
                  darkMode
                    ? "text-white hover:text-purple-400"
                    : "text-gray-800 hover:text-purple-600"
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Mobile Theme Toggle */}
            <div className="flex justify-center gap-5 py-3">

              <button
                onClick={() => setDarkMode(false)}
                className="text-yellow-500"
                title="Light Mode"
              >
                <Sun size={22} />
              </button>

              <button
                onClick={() => setDarkMode(true)}
                className={darkMode ? "text-white" : "text-gray-500"}
                title="Dark Mode"
              >
                <Moon size={22} />
              </button>

            </div>

            {/* Mobile Resume */}
            <a
              href="/Asma-resume-.jpg"
              download="Asma_Begum_Resume.jpg"
              className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl py-3 text-white"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
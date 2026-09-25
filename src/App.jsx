import React, { useState } from "react";
import bg1 from "./assets/bg1.png";
import Frontpage from "./components/Frontpage";
import Navber from "./components/Navber";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#050816] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
      style={
        darkMode
          ? {
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      <Navber
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Frontpage darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <Certificates darkMode={darkMode} />

      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
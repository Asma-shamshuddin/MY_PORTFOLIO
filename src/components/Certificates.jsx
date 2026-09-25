import React from "react";

import internship from "../assets/internship.png";
import lor from "../assets/lor.png";
import tcs from "../assets/tcs.png";
import coding from "../assets/coding.png";
import workshop from "../assets/workshop.png";
import hackathon from "../assets/hackathon.jpeg";
import Nqss from "../assets/Nqss.png";
import python from "../assets/python.png";
import AI from "../assets/AI.png";

const certificates = [
  {
    title: "SkillCraft Technology Internship",
    image: internship,
    issuer: "SkillCraft Technology",
    file: internship,
  },
  {
    title: "Letter of Recommendation",
    image: lor,
    issuer: "SkillCraft Technology",
    file: lor,
  },
  {
    title: "TCS Training Certificate",
    image: tcs,
    issuer: "TCS",
    file: tcs,
  },
  {
    title: "Coding Test Certificate",
    image: coding,
    issuer: "VTU_Kalaburagi",
    file: coding,
  },
  {
    title: "AI SKILL",
    image: AI,
    issuer: "EY and Microsoft",
    file: AI,
  },
  {
    title: "PALS Workshop",
    image: workshop,
    issuer: "IIT Hyderabad",
    file: workshop,
  },
  {
    title: "Hackathon",
    image: hackathon,
    issuer: "BLDE College",
    file: hackathon,
  },
  {
    title: "Python Skill Challenge",
    image: python,
    issuer: "VTU CPGS Kalaburagi",
    file: python,
  },
  {
    title: "National Quantum Student Summit",
    image: Nqss,
    issuer: "VTU Belagavi",
    file: Nqss,
  },
];

const Certificates = ({ darkMode }) => {
  return (
    <section id="certificates" className="py-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="text-purple-400">
              Certificates
            </span>
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Certifications, internships, workshops, hackathons and technical
            achievements that showcase my learning journey.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className={`backdrop-blur-xl border rounded-3xl overflow-hidden
              hover:-translate-y-2 hover:border-purple-500
              transition-all duration-300 shadow-lg
              hover:shadow-purple-500/30 ${
                darkMode
                  ? "bg-[#0b1023]/70 border-purple-500/20"
                  : "bg-white/80 border-purple-200"
              }`}
            >

              {/* Certificate Image */}
              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-5">

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {certificate.title}
                </h3>

                <p
                  className={`text-sm ${
                    darkMode
                      ? "text-purple-300"
                      : "text-purple-600"
                  }`}
                >
                  {certificate.issuer}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-95 transition"
                >
                  View Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;
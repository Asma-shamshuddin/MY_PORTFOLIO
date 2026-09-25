import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ouepyxp",
        "template_ye8p1ir",
        form.current,
        "4ln3KafVZ1pJAMFLh"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✓");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b] text-white"
          : "bg-linear-to-br from-gray-100 via-white to-purple-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p
            className={`mt-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-lg rounded-2xl p-8 border transition-colors duration-300 ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-white/80 border-purple-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />

                <p
                  className={
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }
                >
                  masifshaikh786786@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="text-purple-400" />

                <p
                  className={
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }
                >
                  +91 8431391539
                </p>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-purple-400 text-2xl" />

                <a
                  href="https://www.linkedin.com/in/asma-begum-052a0a360"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "text-gray-200 hover:text-purple-400 transition"
                      : "text-gray-700 hover:text-purple-600 transition"
                  }
                >
                  LinkedIn Profile
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-400 text-2xl" />

                <a
                  href="https://github.com/Asma-shamshuddin"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "text-gray-200 hover:text-purple-400 transition"
                      : "text-gray-700 hover:text-purple-600 transition"
                  }
                >
                  GitHub Profile
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-lg rounded-2xl p-8 border transition-colors duration-300 ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-white/80 border-purple-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Send Message
            </h3>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`w-full mb-4 p-3 rounded-lg outline-none border transition ${
                darkMode
                  ? "bg-black/30 border-white/20 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`w-full mb-4 p-3 rounded-lg outline-none border transition ${
                darkMode
                  ? "bg-black/30 border-white/20 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className={`w-full mb-4 p-3 rounded-lg outline-none border transition resize-none ${
                darkMode
                  ? "bg-black/30 border-white/20 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            ></textarea>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 hover:scale-95 transition text-white font-semibold"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && (
              <p
                className={`text-center mt-4 text-sm ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {status}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

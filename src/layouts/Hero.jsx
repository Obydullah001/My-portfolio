import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-pink-400">Obydullah Hasib </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Front End Developer
          </h2>
          <p className="text-lg text-gray-300">
            I am a passionate Front End Based MERN Stack Developer Focused on
            Crafting Beautiful and Functional Web Experiences. With the help of
            React , Javascript and Other Tools .
          </p>
          <div className="flex space-x-2.5">
            <a
              href="https://drive.google.com/file/d/1-rDvH37kljIpN4NhFjhXP1noAj6uAiGJ/view?usp=sharing"
              download
              className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-3 rounded-lg transition duration-300"
            >
              <span className="mr-2">📄</span> Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg transition duration-300"
            >
              <span className="mr-2">✉️</span> Contact Me
            </Link>
          </div>
          <div className="flex gap-2 -mt-3 ml-1">
            <a href="https://www.linkedin.com/in/obydullah-hasib/" target="_blank" rel="noopener noreferrer">
              <img
              className="size-7"
              src="https://i.ibb.co.com/NnsvJd3t/linkedin.png"
              alt=""
            />
            </a>
        <a href="https://github.com/Obydullah001" target="_blank" rel="noopener noreferrer">
          <img
            className="size-7"
            src="https://i.ibb.co.com/VYfp7nDw/github.png"
            alt=""
          />
        </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img
              src="https://i.ibb.co.com/BKTPnk4M/Generated-Image-October-25-2025-5-25-PM.png "
              alt="Obydullah Hasib Standing Confident"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Skill Icons */}
          <div className=" items-center gap-4 pointer-events-none">
            {/* Example icons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

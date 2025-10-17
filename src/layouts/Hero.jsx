import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-pink-400">Meriem</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300">
            Crafting modern, responsive, and user-friendly websites with passion and precision.
          </p>
          <a
            href="/resume.pdf"
            className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-3 rounded-lg transition duration-300"
          >
            <span className="mr-2">📄</span> Download Resume
          </a>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img
              src="/images/meriem.jpg"
              alt="Meriem working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Skill Icons */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center gap-4 pointer-events-none">
            {/* Example icons */}
            <span className="text-yellow-400 text-xl">⚛️</span>
            <span className="text-blue-400 text-xl">💻</span>
            <span className="text-green-400 text-xl">🌐</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
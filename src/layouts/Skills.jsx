import React, { useState } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaJsSquare, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill, RiVercelLine } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';

const skillData = {
  'Front-end': [
    { name: 'HTML5', percent: 70, icon: <AiFillHtml5 /> },
    { name: 'React', percent: 50, icon: <FaReact /> },
    { name: 'CSS', percent: 60, icon: <IoLogoCss3 /> },
    { name: 'JavaScript', percent: 55, icon: <FaJsSquare /> },
    { name: 'Tailwind CSS', percent: 80, icon: <RiTailwindCssFill /> },
    { name: 'Bootstrap5', percent: 80, icon: <FaBootstrap /> },
  ],
  'Back-end': [
    { name: 'Node.js', percent: 55, icon: <FaNode /> },
    { name: 'Express.js', percent: 70, icon: <SiExpress /> },
    { name: 'MongoDB', percent: 60, icon: <SiMongodb /> },
    { name: 'Firebase', percent: 60, icon: <IoLogoFirebase /> },
    { name: 'Vercel', percent: 50, icon: <RiVercelLine /> },
  ],
  'Web Development': [
    { name: 'HTML', percent: 70, icon:  <AiFillHtml5 /> },
    { name: 'CSS', percent: 60, icon: <IoLogoCss3 /> },
    { name: 'Bootstrap5', percent: 80, icon: <FaBootstrap /> },
    { name: 'JavaScript', percent: 55, icon: <FaJsSquare /> },
    { name: 'Tailwind CSS', percent: 80, icon: <RiTailwindCssFill /> },
    { name: 'Node.js', percent: 55, icon: <FaNode /> },
    { name: 'Express', percent: 70, icon: <SiExpress /> },
    { name: 'MongoDB', percent: 60, icon: <SiMongodb /> },
    { name: 'Firebase', percent: 60, icon: <IoLogoFirebase /> },
  ],
};

const categories = Object.keys(skillData);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Front-end');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-sans">
      <h1 className="text-4xl mx-auto text-center p-3 font-bold text-purple-700">Skills</h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-purple-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData[activeCategory].map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-purple-500 transition"
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold"><span className='text-3xl md:text-5xl'>{skill.icon}</span> {skill.name}</span>
              <span className="text-sm text-purple-400 mt-11 md:mt-[75px] ">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
import React, { useState } from 'react';

const skillData = {
  'Front-end': [
    { name: 'HTML5', percent: 70, icon: '🌐' },
    { name: 'React', percent: 50, icon: '⚛️' },
    { name: 'CSS', percent: 60, icon: '🎨' },
    { name: 'JavaScript', percent: 55, icon: '📜' },
    { name: 'Tailwind CSS', percent: 80, icon: '💨' },
    { name: 'Bootstrap5', percent: 80, icon: '🅱️' },
  ],
  'Back-end': [
    { name: 'Node.js', percent: 55, icon: '🟢' },
    { name: 'Express.js', percent: 70, icon: '🚂' },
    { name: 'MongoDB', percent: 60, icon: '🍃' },
    { name: 'Firebase', percent: 60, icon: '🔥' },
    { name: 'Vercel', percent: 50, icon: '🚀' },
  ],
  'Web Development': [
    { name: 'HTML', percent: 70, icon: '🌐' },
    { name: 'CSS', percent: 60, icon: '🎨' },
    { name: 'JavaScript', percent: 55, icon: '📜' },
    { name: 'Tailwind CSS', percent: 80, icon: '💨' },
    { name: 'Node.js', percent: 55, icon: '🟢' },
    { name: 'Express', percent: 70, icon: '🚂' },
    { name: 'MongoDB', percent: 60, icon: '🍃' },
    { name: 'Firebase', percent: 60, icon: '🔥' },
  ],
};

const categories = Object.keys(skillData);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Front-end');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-sans">
      <h1 className="text-4xl mx-auto text-center p-3 font-bold text-purple-400">Skills</h1>

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
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">{skill.icon} {skill.name}</span>
              <span className="text-sm text-purple-400">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full transition-all duration-500"
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
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Technical Skills
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <div className="max-w-5xl mx-auto space-y-12">
          {SKILLS.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer">
                    <i className={`${skill.icon} text-gray-800 dark:text-gray-300`}></i>
                    <span className="font-semibold text-gray-800 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
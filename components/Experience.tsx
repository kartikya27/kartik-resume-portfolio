import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Work Experience
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-white dark:bg-white shadow-xl w-8 h-8 rounded-full border-2 border-black dark:border-white">
                <i className="fas fa-briefcase mx-auto text-black dark:text-black text-sm"></i>
              </div>
              <div className="order-1 bg-gray-50 dark:bg-dark-card rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300">
                <h3 className="font-bold text-black dark:text-white text-xl">{job.role}</h3>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">{job.company}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{job.duration}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-1">
                  {job.description.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
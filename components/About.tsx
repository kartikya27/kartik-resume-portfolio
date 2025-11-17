import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Summary
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
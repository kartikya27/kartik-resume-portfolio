import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-8 font-bold">
          {PERSONAL_INFO.title}
        </p>
         <p className="max-w-3xl mx-auto text-gray-800 dark:text-gray-300 mb-12">
            A passionate developer transforming ideas into scalable, high-performance web applications.
        </p>
        <div className="flex justify-center items-center space-x-6">
            <a 
              href="#contact"
              className="inline-block bg-black text-white dark:bg-white dark:text-black font-bold py-3 px-8 rounded-full hover:opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
             <a 
              href="/Kartik_Maandothiya_Resume.pdf" 
              download
              className="inline-block border-2 border-black text-black dark:border-white dark:text-white font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
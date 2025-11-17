import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <p className="text-center text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform duration-300 transform hover:scale-110" aria-label="Email">
            <i className="fas fa-envelope text-4xl"></i>
          </a>
          <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform duration-300 transform hover:scale-110" aria-label="GitHub">
            <i className="fab fa-github text-4xl"></i>
          </a>
          <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform duration-300 transform hover:scale-110" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-4xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
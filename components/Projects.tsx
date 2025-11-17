import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Project Showcase
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-white dark:bg-dark-bg rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-800 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 dark:bg-dark-card rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 border border-gray-300 dark:border-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-semibold hover:underline">
                    Live Demo <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                 <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Education</h3>
                 <div className="space-y-6">
                    {EDUCATION.map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-dark-card p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="text-xl font-bold text-black dark:text-white">{item.degree}</h4>
                            <p className="text-gray-800 dark:text-gray-300 font-semibold">{item.institution}</p>
                            {item.duration && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.duration}</p>}
                        </div>
                    ))}
                 </div>
            </div>
             <div>
                 <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Certifications</h3>
                 <div className="space-y-6">
                    {CERTIFICATIONS.map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-dark-card p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="text-xl font-bold text-black dark:text-white">{item.degree}</h4>
                            <p className="text-gray-800 dark:text-gray-300 font-semibold">{item.institution}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
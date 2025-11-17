import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-card py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
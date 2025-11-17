import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-sm shadow-gray-500/10 transition-colors duration-500 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-black dark:text-white tracking-widest">
          {PERSONAL_INFO.name.split(' ')[0]}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
        <div className="md:hidden flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-gray-800 dark:text-gray-300 focus:outline-none">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from 'react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-xl"></i>
      ) : (
        <i className="fas fa-moon text-xl text-gray-700"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
import React, { useContext } from 'react';
import { ThemeContext, themes } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === themes.dark;

  return (
    <div>
      <label htmlFor="ThemeToggle">Dark Mode:</label>
      <input
        id="ThemeToggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;

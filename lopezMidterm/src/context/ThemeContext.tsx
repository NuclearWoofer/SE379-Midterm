import React, { createContext, useState } from 'react';

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
  },
};

type Theme = typeof themes.light | typeof themes.dark;

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  const contextValue: ThemeContextProps = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

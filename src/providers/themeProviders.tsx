import { createContext, ReactNode, useEffect, useState } from 'react';
interface Props {
  children: ReactNode;
}
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { },
});
export function ThemeProvider({children}: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
      setTheme(preferredTheme);
      document.documentElement.setAttribute('data-theme', preferredTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
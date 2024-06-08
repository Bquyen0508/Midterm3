import { createContext, useState } from "react";

export const ThemeMode = createContext(false);
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeMode.Provider>
  );
}

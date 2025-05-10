
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "default" | "alternate";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default");

  // Apply theme-specific body class
  useEffect(() => {
    if (theme === "alternate") {
      document.body.classList.add("theme-alternate");
    } else {
      document.body.classList.remove("theme-alternate");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "default" ? "alternate" : "default");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

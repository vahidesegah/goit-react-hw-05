import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = {
  dark: {
    "--ana-renk": "#111827",
    "--ikincil-renk": "#1f2937",
    "--vurgu-rengi": "#64748b",
    "--metin-rengi": "#e2e8f0",
    "--hover-rengi": "#9ca3af",
  },
  light: {
    "--ana-renk": "#f8f9fa",
    "--ikincil-renk": "#ffffff",
    "--vurgu-rengi": "#2196f3",
    "--metin-rengi": "#343a40",
    "--hover-rengi": "#1976d2",
  },
  colorful: {
    "--ana-renk": "#424242",
    "--ikincil-renk": "#616161",
    "--vurgu-rengi": "#ff9800",
    "--metin-rengi": "#ffffff",
    "--hover-rengi": "#f57c00",
  },
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);

    const theme = themes[currentTheme];
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }

    document.body.classList.remove("dark", "light", "colorful");
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

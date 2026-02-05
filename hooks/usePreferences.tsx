"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pt";
export type ThemeMode = "light" | "dark";

interface PreferencesContextValue {
  language: Language;
  theme: ThemeMode;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
}

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined);

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("studyos-language") as Language | null;
    const storedTheme = window.localStorage.getItem("studyos-theme") as ThemeMode | null;

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("studyos-theme", next);
      return next;
    });
  };

  const handleSetLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("studyos-language", next);
  };

  const value = useMemo(
    () => ({ language, theme, toggleTheme, setLanguage: handleSetLanguage }),
    [language, theme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
};

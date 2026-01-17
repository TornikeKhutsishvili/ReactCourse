import React, { createContext, useContext, useMemo, useState } from "react";
import ge from "../assets/i18n/ge.json";
import en from "../assets/i18n/en.json";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("lang") || "en",
  );

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ge" : "en";
    setLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  const translations = useMemo(() => {
    return language === "en" ? en : ge;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export default LanguageProvider;

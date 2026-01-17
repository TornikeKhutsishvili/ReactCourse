import React from "react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "en", key: "EN" },
  { code: "ge", key: "GE" },
];

const LanguageSwitcher = () => {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <div className="d-flex gap-1 border rounded p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={toggleLanguage}
          className={`btn btn-sm ${
            language === lang.code ? "btn-primary" : "btn-outline-secondary"
          }`}
        >
          {translations.language[lang.key]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

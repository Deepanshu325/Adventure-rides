import React, { createContext, useState, useContext } from "react";
import translations from "./Translation.jsx"; // Ensure this path is correct

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translang = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

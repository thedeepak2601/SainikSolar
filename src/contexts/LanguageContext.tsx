import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, hi: string) => string;
  hasSelectedLanguage: boolean;
  completeLanguageSelection: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  t: (en) => en,
  hasSelectedLanguage: true,
  completeLanguageSelection: () => { },
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("sainik_solar_lang");
    return (saved as Language) || "en";
  });

  const [hasSelectedLanguage, setHasSelectedLanguage] = useState<boolean>(() => {
    return localStorage.getItem("sainik_solar_lang_selected") === "true";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("sainik_solar_lang", newLang);
  };

  const completeLanguageSelection = () => {
    setHasSelectedLanguage(true);
    localStorage.setItem("sainik_solar_lang_selected", "true");
  };

  const t = (en: string, hi: string) => {
    if (lang === "hi") return hi;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, hasSelectedLanguage, completeLanguageSelection }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

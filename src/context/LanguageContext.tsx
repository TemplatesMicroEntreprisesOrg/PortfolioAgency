"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";

type LanguageKeys = "en" | "fr" | "de" | "es" | "it";

interface LanguageContextProps {
  selectedLanguage: LanguageKeys;
  setSelectedLanguage: (lang: LanguageKeys) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ✅ Récupérer la langue depuis les cookies au chargement initial
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKeys>(
    (getCookie("selectedLanguage") as LanguageKeys) || "fr"
  );

  // ✅ Mettre à jour les cookies lorsque la langue change
  useEffect(() => {
    setCookie("selectedLanguage", selectedLanguage, { path: "/" });
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

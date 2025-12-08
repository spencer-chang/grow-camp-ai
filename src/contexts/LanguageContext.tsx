import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (zh: string, en: string) => string;
  isEnglish: boolean;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine language from URL path
  const isEnglishPath = location.pathname.startsWith("/en");
  const [language, setLanguageState] = useState<Language>(isEnglishPath ? "en" : "zh");

  useEffect(() => {
    // Sync language state with URL
    setLanguageState(isEnglishPath ? "en" : "zh");
  }, [isEnglishPath]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Navigate to corresponding language path
    const currentPath = location.pathname;
    
    if (lang === "en") {
      // Switch to English
      if (!currentPath.startsWith("/en")) {
        // Map Chinese paths to English paths
        let newPath = "/en";
        if (currentPath === "/" || currentPath === "/home") {
          newPath = "/en/home";
        } else if (currentPath.startsWith("/camps/")) {
          newPath = `/en/camp/${currentPath.split("/camps/")[1]}`;
        } else if (currentPath === "/camps") {
          newPath = "/en/camps";
        } else {
          newPath = `/en${currentPath}`;
        }
        navigate(newPath);
      }
    } else {
      // Switch to Chinese
      if (currentPath.startsWith("/en")) {
        let newPath = currentPath.replace("/en", "") || "/";
        // Handle /en/home -> /
        if (newPath === "/home") {
          newPath = "/";
        }
        // Handle /en/camp/xxx -> /camps/xxx
        if (newPath.startsWith("/camp/")) {
          newPath = newPath.replace("/camp/", "/camps/");
        }
        navigate(newPath);
      }
    }
  };

  const t = (zh: string, en: string) => (language === "en" ? en : zh);

  const getLocalizedPath = (path: string) => {
    if (language === "en") {
      if (path === "/" || path === "/home") return "/en/home";
      if (path.startsWith("/camps/")) return path.replace("/camps/", "/en/camp/");
      if (path === "/camps") return "/en/camps";
      return `/en${path}`;
    }
    return path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isEnglish: language === "en",
        getLocalizedPath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

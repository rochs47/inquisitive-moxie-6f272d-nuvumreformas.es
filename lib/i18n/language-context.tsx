"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Language, type TranslationKeys } from "./translations"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "novum-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ca")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (stored === "ca" || stored === "es" || stored === "en")) {
      setLanguageState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

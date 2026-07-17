"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Language, type TranslationKeys } from "./translations"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ca")

  // Efecto para cargar idioma al montar
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("novum-language") : null
    if (stored === "ca" || stored === "es" || stored === "en") {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') localStorage.setItem("novum-language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] as any }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
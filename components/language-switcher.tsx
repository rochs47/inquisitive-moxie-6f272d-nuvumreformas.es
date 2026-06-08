"use client"

import { Globe } from "lucide-react"
import { languages } from "@/lib/i18n/translations"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"

interface LanguageSwitcherProps {
  className?: string
  variant?: "default" | "light"
}

export function LanguageSwitcher({ className, variant = "default" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe
        className={cn(
          "w-4 h-4 mr-1",
          variant === "default" ? "text-muted-foreground" : "text-background/70"
        )}
      />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-2 py-1 text-xs font-semibold rounded-md transition-colors duration-200",
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : variant === "default"
                ? "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                : "text-background/70 hover:text-background hover:bg-background/10"
          )}
          aria-label={`Cambiar idioma a ${lang.label}`}
          aria-pressed={language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

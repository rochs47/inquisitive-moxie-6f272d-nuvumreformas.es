"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t.about.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-lg leading-relaxed">
          {t.about.paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Highlights */}
        <ul className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {t.about.highlights.map((item: string) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
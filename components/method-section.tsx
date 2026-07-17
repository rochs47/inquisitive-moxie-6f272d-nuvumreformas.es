"use client"

import { FileText, HardHat, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [FileText, HardHat, Sparkles]

export function MethodSection() {
  const { t } = useLanguage()

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            {t.method.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            {t.method.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.method.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.method.steps.map((step: { title: string; description: string }, index: number) => {
            const Icon = icons[index]
            return (
              <div key={step.title} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-serif text-xl text-muted-foreground">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-8 pt-12 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
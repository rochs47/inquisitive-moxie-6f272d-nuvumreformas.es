"use client"

import Image from "next/image"
import { Users, FileCheck, Shield } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [Users, FileCheck, Shield]

export function OficinaTecnicaSection() {
  const { t } = useLanguage()

  return (
    <section id="oficina-tecnica" className="py-24 lg:py-32 bg-[--partner-bg] text-[--partner-foreground]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              {t.technicalOffice.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              {t.technicalOffice.title}
            </h2>
            <p className="mt-6 text-lg text-[--partner-foreground]/80 leading-relaxed">
              {t.technicalOffice.description}
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              {t.technicalOffice.features.map((feature: { title: string; description: string }, index: number) => {
                const Icon = icons[index]
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-[--partner-foreground]/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/architectural-plans.jpg"
                alt={t.technicalOffice.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-xl shadow-2xl max-w-xs">
              <p className="font-serif text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t.technicalOffice.stat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

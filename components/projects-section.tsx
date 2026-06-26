"use client"

import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <>
      {/* 
      <section id="proyectos" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              {t.projects.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.projects.items.map((project) => (
              <div
                key={project.size}
                className="group relative flex flex-col bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Home className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-primary">
                    {project.size}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <Link
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
                >
                  {t.projects.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  )
}
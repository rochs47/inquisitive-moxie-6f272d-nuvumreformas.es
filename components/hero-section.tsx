"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Salón moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full px-6 text-center">
        
        {/* Contenedor del logo con margen superior (mt-12) para separarlo del menú */}
        <div className="mt-12 mb-8 w-full flex justify-center animate-fade-in-up">
          <Image
            src="/images/logo.svg"
            alt="Logo Novum"
            width={600}
            height={250}
            className="w-auto h-auto max-h-[280px] object-contain"
            priority
          />
        </div>

        {/* Contenedor de texto e info */}
        <div className="container mx-auto">
            <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-50">
              {t.hero.title}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
              {t.hero.subtitle}
            </p>

            {/* Botones */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
              <Button asChild size="lg" className="rounded-lg px-8 py-6">
                <Link href="#contacto">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg px-8 py-6">
                <Link href="#metodo">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  )
}
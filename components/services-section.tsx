"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"

// Asegúrate de que este orden sea el mismo que quieres en la web
const servicesData = [
  { 
    title: "Electricidad", 
    description: "Instalaciones eléctricas completas y certificadas.", 
    image: "/images/service-electrical.png" 
  },
  { 
    title: "Fontanería", 
    description: "Instalaciones de agua y saneamiento.", // Aquí ya he quitado lo de "clima"
    image: "/images/service-plumbing.png" 
  },
  { 
    title: "Carpintería", 
    description: "Muebles a medida y carpintería de alta calidad.", 
    image: "/images/service-carpentry.jpg" 
  },
  { 
    title: "Suelos", 
    description: "Instalación y reparación de suelos.", 
    image: "/images/detail-floor.jpg" 
  },
  { 
    title: "Interiores", 
    description: "Diseño y reforma de interiores.", 
    image: "/images/service-interiors.jpg" 
  },
  { 
    title: "Albañilería", 
    description: "Trabajamos con profesionales.", 
    image: "/images/service-masonry.jpg" 
  },
  { 
    title: "Limpieza", 
    description: "Limpieza profesional de fin de obra.", 
    image: "/images/service-cleaning.jpg" // Asegúrate de que esta imagen sea la correcta
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="servicios" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative rounded-xl overflow-hidden cursor-pointer",
                isVisible ? "animate-fade-in-up" : "opacity-0"
              )}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-card mb-1">
                  {service.title}
                </h3>
                <p className="text-card/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
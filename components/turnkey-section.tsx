"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileText, HardHat, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: FileText,
    title: "Gestión",
    description: "Tramitamos tus permisos y licencias.",
    image: "/images/architectural-plans.jpg",
  },
  {
    icon: HardHat,
    title: "Supervisión",
    description: "Encargado de obra propio para tu tranquilidad.",
    image: "/images/detail-globalThis.jpg",
  },
  {
    icon: Sparkles,
    title: "Finalización",
    description: "Limpieza profunda post-obra incluida.",
    image: "/images/detail-floor.jpg",
  },
]

export function TurnkeySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="metodo"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Nuestro Método
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Servicio Llave en Mano
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Nos encargamos de todo para que tú solo te preocupes de disfrutar el resultado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500",
                isVisible ? "animate-fade-in-up" : "opacity-0",
                index === 1 && "animation-delay-100",
                index === 2 && "animation-delay-200"
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

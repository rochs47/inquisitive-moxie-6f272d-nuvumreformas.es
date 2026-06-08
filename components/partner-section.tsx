"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Building2, FileCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function PartnerSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tecnicos"
      className="py-24 lg:py-32 bg-partner-bg text-partner-foreground relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={cn(
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}>
            <span className="text-sm font-medium tracking-wider uppercase text-primary-foreground/70">
              Red de Colaboradores
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Partner Técnico
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-partner-foreground/90">
              Contamos con una red de arquitectos e ingenieros colaboradores. Nosotros coordinamos la parte técnica por ti; tú recibes la transparencia de honorarios independientes para los servicios de ingeniería.
            </p>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-partner-foreground/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-partner-foreground" />
                </div>
                <span className="text-sm font-medium text-partner-foreground/80">
                  Red de expertos
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-partner-foreground/10 flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-partner-foreground" />
                </div>
                <span className="text-sm font-medium text-partner-foreground/80">
                  Coordinación total
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-partner-foreground/10 flex items-center justify-center mb-3">
                  <FileCheck className="w-6 h-6 text-partner-foreground" />
                </div>
                <span className="text-sm font-medium text-partner-foreground/80">
                  Honorarios claros
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={cn(
            "relative",
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          )}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/architectural-plans.jpg"
                alt="Planos arquitectónicos sobre mesa de madera"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

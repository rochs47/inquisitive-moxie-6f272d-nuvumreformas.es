"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { Send, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/presupuestos@novumreformas.es", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Hubo un problema de conexión. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div className={cn(
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              {t.contact?.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.contact?.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t.contact?.subtitle}
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contact?.location}</p>
                  <p className="text-muted-foreground">{t.contact?.locationValue}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contact?.phone}</p>
                  <p className="text-muted-foreground">+34 647705420</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.contact?.email}</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:presupuestos@novumreformas.es" className="hover:text-foreground transition-colors">
                      presupuestos@novumreformas.es
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={cn(
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          )}>
            <div className="bg-card rounded-xl p-8 lg:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {t.contact?.form?.successTitle}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.contact?.form?.successText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-foreground">
                      {t.contact?.form?.name || "Nombre"}
                    </Label>
                    <Input
                      id="nombre"
                      name="Nombre del Cliente"
                      placeholder={t.contact?.form?.namePlaceholder || "Tu nombre completo"}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-foreground">
                      {t.contact?.form?.phone || "Teléfono"}
                    </Label>
                    <Input
                      id="telefono"
                      name="Teléfono"
                      type="tel"
                      placeholder="+34 XXX XXX XXX"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {t.contact?.form?.email || "Email"}
                    </Label>
                    <Input
                      id="email"
                      name="Email de Contacto"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="poblacion" className="text-foreground">
                      {t.contact?.form?.town || "Población"}
                    </Label>
                    <Input
                      id="poblacion"
                      name="Población / Localidad"
                      placeholder={t.contact?.form?.townPlaceholder || "Tu ciudad o pueblo"}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-foreground">
                      {t.contact?.form?.message || "Cuéntanos brevemente qué quieres hacer"}
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="Detalles del Proyecto"
                      placeholder={t.contact?.form?.messagePlaceholder || "Ej: Quiero hacer la cocina nueva, reformar el WC o cambiar las ventanas..."}
                      rows={4}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 text-base font-medium transition-all duration-300 hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="mr-2" />
                        {t.contact?.form?.submitting || "Enviando..."}
                      </>
                    ) : (
                      <>
                        {t.contact?.form?.submit || "Solicitar presupuesto"}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {t.contact?.form?.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
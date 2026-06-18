import { Logo } from "@/components/logo"
import { HeroSection } from "@/components/hero-section"
import { MethodSection } from "@/components/method-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sección del Logo y frase de presentación */}
      <section className="flex flex-col items-center justify-center py-12">
        <Logo />
        <p className="mt-4 text-neutral-600 font-medium text-lg italic">
          Aquí empieza lo nuevo
        </p>
      </section>

      <HeroSection />
      <MethodSection />
      <ServicesSection />
      <ProjectsSection />
      <BeforeAfterSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
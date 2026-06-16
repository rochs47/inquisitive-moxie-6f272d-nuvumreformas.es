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
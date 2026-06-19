import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MethodSection } from "@/components/method-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MethodSection />
      <ServicesSection />
      <ProjectsSection />
      <BeforeAfterSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MethodSection } from "@/components/method-section"
import { ServicesSection } from "@/components/services-section"
import { OficinaTecnicaSection } from "@/components/oficina-tecnica-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodSection />
        <ServicesSection />
        <OficinaTecnicaSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
{/* Hero Section */ }
<section className="relative py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-5xl md:text-7xl font-light mb-8">
      AS23 | Gestión & <span className="font-bold">Obras</span>
    </h1>
    <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
      <strong>Dirección de proyecto y ejecución experta.</strong> <br />
      AS23 gestiona tu tranquilidad y construye tu realidad en Cataluña.
    </p>
    <a href="#contacto" className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium">
      Solicitar Presupuesto
    </a>
  </div>
</section>
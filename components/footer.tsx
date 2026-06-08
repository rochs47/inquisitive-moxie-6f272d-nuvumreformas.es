"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.method, href: "#metodo" },
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.gallery, href: "#galeria" },
    { label: t.nav.about, href: "#nosotros" },
    { label: t.nav.contact, href: "#contacto" },
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Logo variant="light" textClassName="text-3xl" />
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.navTitle}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-background/70">
              <li>{t.contact.locationValue}</li>
              <li>+34 647705420</li>
              <li>info@novum.es</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} NOVUM Gestión & Obras. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                {t.footer.legal}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

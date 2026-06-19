"use client"

import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.about, href: "#nosotros" },
    { label: t.nav.method, href: "#metodo" },
    { label: t.nav.services, href: "#servicios" },
    // projects removed
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20 relative">
        {/* Logo eliminado del header */}
        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="p-2 rounded-md focus:outline-none focus:ring-2"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* CTA + Idioma */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="#contacto">{t.nav.quote}</Link>
          </Button>
        </div>
        {/* Mobile panel */}
        {open && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-background shadow-md z-50">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded text-sm font-medium text-foreground hover:bg-background/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild>
                  <Link href="#contacto" onClick={() => setOpen(false)}>{t.nav.quote}</Link>
                </Button>
              </div>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
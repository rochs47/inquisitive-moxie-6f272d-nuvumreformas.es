"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Nuestro Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20 relative">
        {/* Logo centrado en el header (isótopo solo) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Link href="/" className="pointer-events-auto">
            <Logo className="h-10 w-10" />
          </Link>
        </div>

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

        {/* CTA + Idioma */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="#contacto">Presupuesto</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
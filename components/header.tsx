"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.method, href: "#metodo" },
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.gallery, href: "#galeria" },
    { label: t.nav.about, href: "#nosotros" },
    { label: t.nav.contact, href: "#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo textClassName="text-2xl" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 transition-all duration-200 hover:shadow-md"
            >
              <Link href="#contacto">{t.nav.quote}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-[28rem] pb-6" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <LanguageSwitcher />
            </li>
            <li className="pt-2">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.quote}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

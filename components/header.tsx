"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MapPin, Mail, Menu, X, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Главная" },
  { 
    href: "/residents", 
    label: "Жителям",
    children: [
      { href: "/residents/payments", label: "Оплата услуг" },
      { href: "/residents/meters", label: "Передать показания" },
      { href: "/residents/requests", label: "Подать заявку" },
      { href: "/residents/documents", label: "Документы" },
    ]
  },
  { 
    href: "/services", 
    label: "Услуги",
    children: [
      { href: "/services/maintenance", label: "Содержание домов" },
      { href: "/services/repairs", label: "Текущий ремонт" },
      { href: "/services/landscaping", label: "Благоустройство" },
      { href: "/services/utilities", label: "Коммунальные услуги" },
    ]
  },
  { href: "/houses", label: "Наши дома" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">г. Москва, ул. Каменщиков, д. 15, стр. 2</span>
                <span className="sm:hidden">Москва</span>
              </div>
              <a href="mailto:info@granit.biz" className="hidden md:flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" />
                info@granit.biz
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden lg:inline text-primary-foreground/80">Пн-Пт: 9:00—18:00</span>
              <a href="tel:+74951234567" className="flex items-center gap-2 font-medium hover:underline">
                <Phone className="h-4 w-4" />
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground tracking-tight">GRANIT<span className="text-accent">.biz</span></div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Управляющая компания</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-card shadow-lg rounded-md py-2 border border-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground">
              Подать заявку
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              Подать заявку
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

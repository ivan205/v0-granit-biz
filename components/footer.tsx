import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const footerLinks = {
  residents: {
    title: "Жителям",
    links: [
      { label: "Оплата услуг", href: "/residents/payments" },
      { label: "Передать показания", href: "/residents/meters" },
      { label: "Подать заявку", href: "/residents/requests" },
      { label: "Личный кабинет", href: "/residents/cabinet" },
      { label: "Документы", href: "/residents/documents" },
    ],
  },
  services: {
    title: "Услуги",
    links: [
      { label: "Содержание домов", href: "/services/maintenance" },
      { label: "Текущий ремонт", href: "/services/repairs" },
      { label: "Благоустройство", href: "/services/landscaping" },
      { label: "Коммунальные услуги", href: "/services/utilities" },
      { label: "Аварийная служба", href: "/services/emergency" },
    ],
  },
  company: {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Наши дома", href: "/houses" },
      { label: "Новости", href: "/news" },
      { label: "Вакансии", href: "/careers" },
      { label: "Контакты", href: "/contacts" },
    ],
  },
  info: {
    title: "Информация",
    links: [
      { label: "Тарифы", href: "/tariffs" },
      { label: "Раскрытие информации", href: "/disclosure" },
      { label: "Вопросы и ответы", href: "/faq" },
      { label: "Обратная связь", href: "/feedback" },
      { label: "Политика конфиденциальности", href: "/privacy" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">G</span>
              </div>
              <div>
                <div className="text-xl font-bold">GRANIT<span className="text-accent">.biz</span></div>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Управляющая Компания Гранит — надёжное управление многоквартирными домами. 
              Работаем с 2011 года, обслуживаем более 50 домов.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  г. Москва, ул. Каменщиков, д. 15, стр. 2
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+74951234567" className="text-sm hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@granit.biz" className="text-sm hover:text-accent transition-colors">
                  info@granit.biz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Пн-Пт: 9:00—18:00, Сб: 10:00—14:00
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2011—2026 УК Гранит. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

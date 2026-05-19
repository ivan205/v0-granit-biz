import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Содержание домов",
    description: "Уборка подъездов, обслуживание лифтов и инженерных систем",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    count: "50+ домов",
    href: "/services/maintenance",
  },
  {
    id: 2,
    title: "Текущий ремонт",
    description: "Ремонт кровли, фасадов, подъездов и общедомовых помещений",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    count: "24/7",
    href: "/services/repairs",
  },
  {
    id: 3,
    title: "Благоустройство",
    description: "Озеленение, детские площадки, парковки и дворовые территории",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    count: "100+ дворов",
    href: "/services/landscaping",
  },
  {
    id: 4,
    title: "Коммунальные услуги",
    description: "Водоснабжение, отопление, электричество, вывоз мусора",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    count: "Круглосуточно",
    href: "/services/utilities",
  },
  {
    id: 5,
    title: "Аварийная служба",
    description: "Экстренное устранение аварий в любое время суток",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    count: "24/7",
    href: "/services/emergency",
  },
  {
    id: 6,
    title: "Личный кабинет",
    description: "Оплата услуг, передача показаний, подача заявок онлайн",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    count: "Онлайн",
    href: "/residents/cabinet",
  },
]

export function CatalogSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Наши услуги</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Полный спектр услуг по управлению и обслуживанию многоквартирных домов. 
            Работаем для вашего комфорта и безопасности.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent text-sm font-medium">{service.count}</span>
                <h3 className="text-2xl font-bold text-primary-foreground mt-1">{service.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-2">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

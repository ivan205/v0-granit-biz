import Link from "next/link"
import { ArrowRight } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Новое поступление карельского гранита",
    description: "Поступила партия Габбро-диабаза и Гранатового Амфиболита",
  },
  {
    id: 2,
    title: "Скидка 15% на брусчатку",
    description: "Акция действует до конца месяца на всю колотую брусчатку",
  },
  {
    id: 3,
    title: "Новый офис в Санкт-Петербурге",
    description: "Открыли филиал для клиентов из Северо-Западного региона",
  },
  {
    id: 4,
    title: "Бесплатный выезд замерщика",
    description: "При заказе от 100 000 рублей замер бесплатно",
  },
]

export function Announcements() {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {announcements.map((item) => (
            <Link
              key={item.id}
              href="/news"
              className="group p-5 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {item.description}
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Подробнее
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

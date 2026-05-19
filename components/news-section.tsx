import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    id: 1,
    title: "Завершён капитальный ремонт кровли на ул. Ленина, 25",
    description: "Полностью заменена кровля жилого дома. Работы выполнены качественно и в срок.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    date: "15 мая 2026",
    category: "Ремонт",
  },
  {
    id: 2,
    title: "Новые детские площадки во дворах",
    description: "Установлены современные игровые комплексы в 5 дворах. Площадки соответствуют всем требованиям безопасности.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    date: "10 мая 2026",
    category: "Благоустройство",
  },
  {
    id: 3,
    title: "Собрание собственников жилья",
    description: "Приглашаем на общее собрание 20 мая в 19:00 в актовом зале по адресу ул. Мира, 10.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    date: "5 мая 2026",
    category: "События",
  },
  {
    id: 4,
    title: "График отключения горячей воды на лето",
    description: "Публикуем график плановых отключений горячего водоснабжения на период профилактических работ.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    date: "28 апреля 2026",
    category: "Объявления",
  },
  {
    id: 5,
    title: "Запущен личный кабинет жителя",
    description: "Теперь вы можете оплачивать услуги, передавать показания и подавать заявки онлайн.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    date: "20 апреля 2026",
    category: "Сервис",
  },
  {
    id: 6,
    title: "Итоги работы за первый квартал 2026",
    description: "Отчёт о проделанной работе: выполнено 1500 заявок, проведено 12 субботников, отремонтировано 8 подъездов.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    date: "15 апреля 2026",
    category: "Отчёты",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Новости и объявления</h2>
            <p className="text-muted-foreground mt-2">Актуальная информация для жителей</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            Все новости
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <time className="text-sm text-muted-foreground">{item.date}</time>
                <h3 className="font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Читать далее
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" className="items-center gap-2">
            Все новости
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

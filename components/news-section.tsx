import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    id: 1,
    title: "Поступление итальянского мрамора Calacatta",
    description: "В нашем каталоге появился эксклюзивный белый мрамор Calacatta из Италии — идеальный выбор для премиальных интерьеров.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    date: "15 мая 2026",
    category: "Поступления",
  },
  {
    id: 2,
    title: "Завершён проект облицовки фасада бизнес-центра",
    description: "Наша команда успешно завершила облицовку фасада площадью 3000 м² в деловом центре Москвы.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    date: "10 мая 2026",
    category: "Проекты",
  },
  {
    id: 3,
    title: "Участие в выставке «СтройЭкспо 2026»",
    description: "Приглашаем посетить наш стенд на международной строительной выставке с 20 по 23 мая.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    date: "5 мая 2026",
    category: "События",
  },
  {
    id: 4,
    title: "Новая коллекция гранита из Индии",
    description: "Расширили ассортимент экзотическими породами: Blue Pearl, Galaxy Black, Imperial Red.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    date: "28 апреля 2026",
    category: "Поступления",
  },
  {
    id: 5,
    title: "Скидки на остатки слэбов",
    description: "Распродажа слэбов из наличия со скидкой до 30%. Успейте приобрести выгодно!",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    date: "20 апреля 2026",
    category: "Акции",
  },
  {
    id: 6,
    title: "Монтаж гранитной лестницы в частном доме",
    description: "Реализовали сложный проект винтовой лестницы из карельского гранита с латунными перилами.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    date: "15 апреля 2026",
    category: "Проекты",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Новости и события</h2>
            <p className="text-muted-foreground mt-2">Актуальная информация о компании и рынке камня</p>
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

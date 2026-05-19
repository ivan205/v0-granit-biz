import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Гранит",
    description: "Более 100 видов гранита разных оттенков",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    count: "120+ видов",
    href: "/catalog/granite",
  },
  {
    id: 2,
    title: "Мрамор",
    description: "Итальянский, греческий, турецкий мрамор",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    count: "80+ видов",
    href: "/catalog/marble",
  },
  {
    id: 3,
    title: "Брусчатка",
    description: "Колотая и пиленая гранитная брусчатка",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    count: "25+ видов",
    href: "/catalog/paving",
  },
  {
    id: 4,
    title: "Столешницы",
    description: "Кухонные и ванные столешницы на заказ",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    count: "Индивидуально",
    href: "/products/countertops",
  },
  {
    id: 5,
    title: "Памятники",
    description: "Гранитные памятники и надгробия",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    count: "50+ моделей",
    href: "/products/monuments",
  },
  {
    id: 6,
    title: "Лестницы",
    description: "Ступени, подступенки, площадки",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    count: "На заказ",
    href: "/products/stairs",
  },
]

export function CatalogSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Наш каталог</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Широкий ассортимент природного камня и изделий из него. 
            Собственное производство и прямые поставки со всего мира.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent text-sm font-medium">{category.count}</span>
                <h3 className="text-2xl font-bold text-primary-foreground mt-1">{category.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-2">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                  Перейти в каталог
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

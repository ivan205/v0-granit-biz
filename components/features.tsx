import { Truck, Shield, Clock, Award, Ruler, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Доставка по России",
    description: "Отправляем камень и изделия в любую точку страны",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Сертифицированная продукция с гарантией до 25 лет",
  },
  {
    icon: Clock,
    title: "Быстрые сроки",
    description: "Изготовление изделий от 3 рабочих дней",
  },
  {
    icon: Award,
    title: "15 лет опыта",
    description: "Работаем с 2011 года, реализовали 5000+ проектов",
  },
  {
    icon: Ruler,
    title: "Бесплатный замер",
    description: "Выезд специалиста для точных измерений",
  },
  {
    icon: Headphones,
    title: "Консультации",
    description: "Поможем подобрать материал для вашего проекта",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground">Почему выбирают нас</h2>
          <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto">
            Работаем напрямую с карьерами и производителями, предлагаем лучшие условия
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

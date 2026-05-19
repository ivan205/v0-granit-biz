import { Shield, Clock, Users, Award, Phone, FileText } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "15 лет успешной работы и доверие тысяч жителей",
  },
  {
    icon: Clock,
    title: "Оперативность",
    description: "Быстрое реагирование на заявки и обращения жителей",
  },
  {
    icon: Users,
    title: "Профессионализм",
    description: "Квалифицированные специалисты с большим опытом работы",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Высокие стандарты обслуживания и содержания домов",
  },
  {
    icon: Phone,
    title: "Связь 24/7",
    description: "Круглосуточная диспетчерская служба и аварийная бригада",
  },
  {
    icon: FileText,
    title: "Прозрачность",
    description: "Открытая отчётность и доступ к информации онлайн",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground">Почему выбирают нас</h2>
          <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto">
            Мы заботимся о комфорте и безопасности жителей каждый день
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

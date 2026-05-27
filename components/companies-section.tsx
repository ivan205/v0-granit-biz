import Image from "next/image"

const companies = [
  {
    image: "/images/santeh-servis.jpg",
    name: "СантехСервис",
    tagline: "Обслуживание ТСЖ, ЖСК и УК",
    description:
      "Профессиональное обслуживание сантехнических систем многоквартирных домов. Аварийные выезды 24/7, плановые ремонты, замена оборудования любой сложности.",
  },
  {
    image: "/images/granit-group.jpg",
    name: "Гранит — Группа компаний",
    tagline: "Комплексное управление недвижимостью",
    description:
      "Группа компаний «Гранит» — полный цикл управления жилым фондом: от технического обслуживания и благоустройства территорий до клининга и охраны.",
  },
  {
    image: "/images/uk-a1.jpg",
    name: "УК А1",
    tagline: "Управление МКД, СНТ и ТЦ",
    description:
      "Управляющая компания А1 специализируется на профессиональном управлении многоквартирными домами, садовыми товариществами и торговыми центрами.",
  },
]

export function CompaniesSection() {
  return (
    <section className="py-14 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            Наши компании
          </h2>
          <p className="text-muted-foreground mt-2 text-balance">
            Группа компаний «Гранит» — надёжные партнёры в управлении и обслуживании вашего дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <div className="bg-primary flex items-center justify-center p-8">
                <div className="relative w-40 h-40">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {company.name}
                </h3>
                <p className="text-accent font-semibold text-sm mt-1 mb-3">
                  {company.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {company.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Подробнее &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

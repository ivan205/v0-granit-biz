import Image from "next/image"

const partners = [
  { name: "ГраниТрест", logo: "/partners/partner-1.svg" },
  { name: "КаменьПром", logo: "/partners/partner-2.svg" },
  { name: "МраморИмпорт", logo: "/partners/partner-3.svg" },
  { name: "СтройКамень", logo: "/partners/partner-4.svg" },
  { name: "Базальт", logo: "/partners/partner-5.svg" },
  { name: "НордГранит", logo: "/partners/partner-6.svg" },
  { name: "ИталСтоун", logo: "/partners/partner-7.svg" },
  { name: "КарелияКамень", logo: "/partners/partner-8.svg" },
]

export function Partners() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">Наши партнёры</h2>
          <p className="text-muted-foreground mt-2">
            Работаем с ведущими поставщиками и производителями
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 h-20 bg-muted/50 rounded-lg grayscale hover:grayscale-0 transition-all"
            >
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Природный камень высшего качества",
    subtitle: "Гранит, мрамор, известняк со всего мира",
    description: "Более 200 видов натурального камня для ваших проектов",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    cta: "Смотреть каталог",
  },
  {
    id: 2,
    title: "Изделия из гранита на заказ",
    subtitle: "Памятники, столешницы, лестницы",
    description: "Собственное производство и индивидуальный подход к каждому заказу",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    cta: "Заказать изделие",
  },
  {
    id: 3,
    title: "Гранитная брусчатка",
    subtitle: "Благоустройство территорий любой сложности",
    description: "Колотая и пиленая брусчатка для тротуаров, площадей и дворов",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    cta: "Узнать цены",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <p className="text-accent font-medium mb-2 text-sm md:text-base uppercase tracking-wider">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight text-balance">
                  {slide.title}
                </h1>
                <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    {slide.cta}
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 hover:bg-card/40 flex items-center justify-center transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 hover:bg-card/40 flex items-center justify-center transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

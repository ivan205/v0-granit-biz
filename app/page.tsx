import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { Announcements } from "@/components/announcements"
import { CatalogSection } from "@/components/catalog-section"
import { Features } from "@/components/features"
import { NewsSection } from "@/components/news-section"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { QuestionWidget } from "@/components/question-widget"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <Announcements />
        <CatalogSection />
        <Features />
        <NewsSection />
        <Partners />
      </main>
      <Footer />
      <QuestionWidget />
    </div>
  )
}

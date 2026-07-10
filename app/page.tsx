import { Hero } from '@/components/home/hero'
import { SelectedWork } from '@/components/home/selected-work'
import { AboutPreview } from '@/components/home/about-preview'
import { TechStack } from '@/components/home/tech-stack'
import { CTASection } from '@/components/home/cta-section'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <TechStack />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}

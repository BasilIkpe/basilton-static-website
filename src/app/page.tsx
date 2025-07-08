import { NavBAr } from '@/components/navigation'
import { AboutSection, Footer, HeroSection, TeamSection, TestimonialSection } from '@/sections'

export default function Home() {
  return (
    <div className="relative">
      <NavBAr glass={true} fixed={true} />
      <div className="relative w-full landing__page">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  )
}

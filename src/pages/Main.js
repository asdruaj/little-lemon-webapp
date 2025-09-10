import HeroSection from '../components/HeroSection/HeroSection'
import HighlightsSection from '../components/HighlightsSection/HighlightsSection'
import '../styles/main.css'

import Testimonials from '../components/TestimonialsSection/Testimonials'
import AboutSection from '../AboutSection/AboutSection'
const Main = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <Testimonials />
      <AboutSection />
    </main>
  )
}

export default Main

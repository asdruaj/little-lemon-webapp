import HeroSection from '../components/HeroSection/HeroSection'
import HighlightsSection from '../components/HighlightsSection/HighlightsSection'
import '../styles/main.css'

import Testimonials from '../components/TestimonialsSection/Testimonials'
import AboutSection from '../AboutSection/AboutSection'
import { useNavigate } from 'react-router'
const Main = () => {
  const navigate = useNavigate()

  return (
    <main>
      <HeroSection navigate={navigate} />
      <HighlightsSection navigate={navigate} />
      <Testimonials />
      <AboutSection />
    </main>
  )
}

export default Main

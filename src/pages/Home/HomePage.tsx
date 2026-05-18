import { Hero } from '../../components/sections/Hero'
import { Services } from '../../components/sections/Services'
import { TrustSection } from '../../components/sections/TrustSection'
import '../../styles/sections.css'

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustSection />
      {/* keep testimonials/contact unchanged for now */}
    </>
  )
}
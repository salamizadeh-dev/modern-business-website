import { Hero } from '../../components/sections/Hero'
import { Services } from '../../components/sections/Services'
import { TrustSection } from '../../components/sections/TrustSection'
import { FinalCta } from '../../components/sections/FinalCta'
import { ContactSection } from '../../components/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustSection />
      <FinalCta />
      <ContactSection />
    </>
  )
}
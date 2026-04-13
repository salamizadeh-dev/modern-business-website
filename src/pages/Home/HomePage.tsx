import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { SectionTitle } from '../../components/ui/SectionTitle'

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__content">
          <p className="eyebrow">Modern business websites</p>
          <h1>Build a strong online presence for your business</h1>
          <p className="hero__text">
            Clean, responsive, and conversion-focused websites built with
            modern frontend tools.
          </p>

          <div className="hero__actions">
            <Link to="/contact">
              <Button>Start a Project</Button>
            </Link>
            <Link to="/about" className="secondary-link">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Services"
            subtitle="Simple, practical, and business-focused frontend solutions."
          />

          <div className="cards">
            <article className="card">
              <h3>Business Websites</h3>
              <p>Fast and clean websites for brands, services, and companies.</p>
            </article>

            <article className="card">
              <h3>UI Development</h3>
              <p>Responsive interfaces built with reusable components.</p>
            </article>

            <article className="card">
              <h3>Landing Pages</h3>
              <p>High-impact pages designed for clarity and conversions.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
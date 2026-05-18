import { HeroPreview } from './HeroPreview'
import '../../styles/hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Modern frontend solutions for service-based businesses
          </p>

          <h1 className="hero__title">
            Modern business websites designed for clarity, trust, and growth
          </h1>

          <p className="hero__description">
            We build responsive, polished frontend experiences that help brands
            communicate clearly, look credible, and perform across every device.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button hero__button--primary">
              Start a Project
            </a>

            <a href="#services" className="hero__button hero__button--secondary">
              View Services
            </a>
          </div>

          <div className="hero__trust-row">
            <div className="hero__trust-item">
              <span className="hero__trust-dot" />
              <span>Responsive by default</span>
            </div>

            <div className="hero__trust-item">
              <span className="hero__trust-dot" />
              <span>Clean frontend architecture</span>
            </div>

            <div className="hero__trust-item">
              <span className="hero__trust-dot" />
              <span>Business-focused design</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <HeroPreview />
        </div>
      </div>
    </section>
  )
}
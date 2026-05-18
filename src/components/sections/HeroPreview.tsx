export function HeroPreview() {
  return (
    <div className="hero-preview">
      <div className="hero-preview__main-card">
        <div className="hero-preview__browser-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-preview__content">
          <div className="hero-preview__badge">Business Website</div>
          <h3 className="hero-preview__title">Modern Digital Presence</h3>
          <p className="hero-preview__text">
            Responsive layouts, strong visual hierarchy, and business-focused
            frontend implementation.
          </p>

          <div className="hero-preview__metrics">
            <div className="hero-preview__metric-card">
              <span className="hero-preview__metric-label">Performance</span>
              <strong>98%</strong>
            </div>

            <div className="hero-preview__metric-card">
              <span className="hero-preview__metric-label">Responsive</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-preview__floating-card hero-preview__floating-card--top">
        <span className="hero-preview__floating-label">UI Quality</span>
        <strong>Clean, modern, scalable</strong>
      </div>

      <div className="hero-preview__floating-card hero-preview__floating-card--bottom">
        <span className="hero-preview__floating-label">Delivery Focus</span>
        <strong>Built for credibility and clarity</strong>
      </div>
    </div>
  )
}
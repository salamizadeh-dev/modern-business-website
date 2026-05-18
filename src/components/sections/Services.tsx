export function Services() {
  const services = [
    {
      title: 'Custom Business Websites',
      description:
        'Responsive websites built to communicate clearly and strengthen online credibility.',
    },
    {
      title: 'Scalable Frontend Interfaces',
      description:
        'Modern interface development focused on maintainability, usability, and long-term growth.',
    },
    {
      title: 'Responsive UI Implementation',
      description:
        'Frontend experiences designed to work cleanly across desktop, tablet, and mobile devices.',
    },
  ]

  return (
    <section className="section" id="services">
      <div className="section__container">
        <div className="section-header">
          <p className="section-header__eyebrow">Services</p>
          <h2 className="section-header__title">
            Frontend work designed for clarity, trust, and usability
          </h2>
          <p className="section-header__description">
            A focused set of frontend services for businesses that need a modern,
            responsive, and credible digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                <span />
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export function TrustSection() {
  const items = [
    {
      title: 'Clean and Maintainable Code',
      description:
        'Frontend work structured for clarity, scalability, and easier long-term maintenance.',
    },
    {
      title: 'Responsive by Default',
      description:
        'Layouts and interface patterns built to work consistently across all major screen sizes.',
    },
    {
      title: 'Business-Focused UI Decisions',
      description:
        'Design and implementation choices made with usability, trust, and clarity in mind.',
    },
    {
      title: 'Fast Iteration Process',
      description:
        'A practical workflow for refining ideas quickly and turning them into polished frontend results.',
    },
  ]

  return (
    <section className="section section--muted" id="why-us">
      <div className="section__container">
        <div className="section-header">
          <p className="section-header__eyebrow">Why Work With Us</p>
          <h2 className="section-header__title">
            Built with both visual quality and engineering discipline
          </h2>
          <p className="section-header__description">
            The goal is not only to make interfaces look good, but to make them
            structured, usable, and dependable in real-world business contexts.
          </p>
        </div>

        <div className="trust-grid">
          {items.map((item) => (
            <article key={item.title} className="trust-card">
              <h3 className="trust-card__title">{item.title}</h3>
              <p className="trust-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
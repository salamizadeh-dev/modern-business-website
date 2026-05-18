export function ContactSection() {
  return (
    <section className="section section--muted" id="contact">
      <div className="section__container">
        <div className="contact-layout">
          <div className="contact-content">
            <p className="section-header__eyebrow">Contact</p>
            <h2 className="contact-content__title">
              Let’s talk about your next frontend project
            </h2>
            <p className="contact-content__description">
              Share a few details about your goals, and we can explore the right
              direction for a modern, responsive, and business-focused frontend
              experience.
            </p>

            <div className="contact-points">
              <div className="contact-point">
                <h3>Clear Project Discussion</h3>
                <p>
                  Start with the problem, the goal, and the user experience you
                  want to improve.
                </p>
              </div>

              <div className="contact-point">
                <h3>Frontend-First Execution</h3>
                <p>
                  Focused on clean implementation, responsive layouts, and
                  maintainable structure.
                </p>
              </div>

              <div className="contact-point">
                <h3>Practical Delivery</h3>
                <p>
                  A workflow designed for clarity, fast iteration, and useful
                  business outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form">
              <div className="contact-form__group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your project..."
                />
              </div>

              <button type="submit" className="contact-form__button">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
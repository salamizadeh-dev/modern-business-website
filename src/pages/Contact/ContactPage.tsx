import { Button } from '../../components/ui/Button'
import { SectionTitle } from '../../components/ui/SectionTitle'
import { useContactForm } from '../../hooks/useContactForm'

export function ContactPage() {
  const { formData, isSubmitting, isSuccess, handleChange, handleSubmit } =
    useContactForm()

  return (
    <main className="section">
      <div className="container contact-page">
        <SectionTitle
          title="Contact"
          subtitle="Send a message through a clean typed form flow."
        />

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows={6}
              required
            />
          </label>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {isSuccess ? (
            <p className="success-message">Your message was sent successfully.</p>
          ) : null}
        </form>
      </div>
    </main>
  )
}
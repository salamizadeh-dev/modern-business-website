import { SectionTitle } from '../../components/ui/SectionTitle'

export function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          title="About"
          subtitle="A frontend-focused portfolio project built with clean structure."
        />

        <p>
          This project is a modern business landing page built with React and TypeScript, focusing on clean architecture and scalability.

The application follows a structured approach by separating concerns between UI components, business logic (custom hooks), and data services. This makes the codebase easier to maintain and extend in real-world scenarios.<br/><br/>

It includes a fully functional contact form with proper state management, typed data flow, and basic testing using Vitest and React Testing Library.

The goal of this project is not only to create a visually appealing website, but also to demonstrate a production-ready frontend structure aligned with real-world development practices.
        </p>
      </div>
    </main>
  )
}
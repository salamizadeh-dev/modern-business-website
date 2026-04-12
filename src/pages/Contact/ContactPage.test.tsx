import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactPage } from './ContactPage'

describe('ContactPage', () => {
  test('renders contact form', () => {
    render(React.createElement(ContactPage))

    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Your email/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Tell me about your project/i),
    ).toBeInTheDocument()
  })

  test('user can type in inputs', () => {
    render(React.createElement(ContactPage))

    const nameInput = screen.getByPlaceholderText('Your name')
    const emailInput = screen.getByPlaceholderText('Your email')
    const messageInput = screen.getByPlaceholderText('Tell me about your project')

    fireEvent.change(nameInput, { target: { value: 'Omid' } })
    fireEvent.change(emailInput, { target: { value: 'omid@test.com' } })
    fireEvent.change(messageInput, { target: { value: 'Test message' } })

    expect(nameInput).toHaveValue('Omid')
    expect(emailInput).toHaveValue('omid@test.com')
    expect(messageInput).toHaveValue('Test message')
  })

  test('form submits successfully', async () => {
    render(React.createElement(ContactPage))

    fireEvent.change(screen.getByPlaceholderText('Your name'), {
      target: { value: 'Omid' },
    })

    fireEvent.change(screen.getByPlaceholderText('Your email'), {
      target: { value: 'omid@test.com' },
    })

    fireEvent.change(screen.getByPlaceholderText('Tell me about your project'), {
      target: { value: 'Test message' },
    })

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    const successMessage = await screen.findByText(
      /your message was sent successfully/i,
    )

    expect(successMessage).toBeInTheDocument()
  })
})
// user behaviour testing not implentation testing.q
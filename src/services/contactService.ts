import type { ContactFormData } from '../types/contact'

export async function submitContactForm(data: ContactFormData): Promise<void> {
  console.log('Submitting form data:', data)

  await new Promise((resolve) => setTimeout(resolve, 800))
}
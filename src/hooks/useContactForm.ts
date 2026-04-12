import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { ContactFormData } from '../types/contact'
import { submitContactForm } from '../services/contactService'

const initialValues: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      await submitContactForm(formData)
      setIsSuccess(true)
      setFormData(initialValues)
    } catch (error) {
      console.error('Form submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  }
}
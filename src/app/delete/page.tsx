'use client'


import { PageLayout } from '../../components/layout'
import { FormInput, Title } from '../../components/ui'
import { Section } from '../../components/section'
import { PageBtn } from '../../components/buttons'
import { FormEvent, useState } from 'react'

const Delete = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reason: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Add actual submission logic here (e.g., API call)
    console.log('Form submitted:', formData)
  }

  return (
    <PageLayout>
      <Section>
        <div className="h-[100vh]">
          <Title first="Dele" second="te my account" height="h-16" />

          <p className="uppercase mt-5 mb-7 text-sm">
            Please fill the form below to request for the deletion of your account with Basilton
            Solutions. Permanently remove your <br />
            personal account and its data from the Basilton Solution platform.
            <br />
            This action is not reversible, so please continue with caution.
          </p>

          <form name="delete-account" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 items-end gap-x-8 gap-y-9">
              <FormInput
                label="Provide Email Address"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              />
              <FormInput
                label="Provide Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
              />
              <FormInput
                label="Select Reasons for deletion"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>

            <PageBtn text="submit" />
          </form>
        </div>
      </Section>
    </PageLayout>
  )
}

export default Delete

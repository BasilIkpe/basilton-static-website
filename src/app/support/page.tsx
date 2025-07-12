'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { FormInput } from '../../components/ui'
import { PageBtn } from '../../components/buttons'
import { Title } from '../../components/ui'
import { Section } from '../../components/section'
import { PageLayout } from '../../components/layout'

interface SupportFormState {
  name: string
  email: string
  phoneNumber: string
  issueDescription: string
  screenshot: string
  priorityLevel: string
  agreementForm: string
}

const Support: React.FC = () => {
  const [formData, setFormData] = useState<SupportFormState>({
    name: '',
    email: '',
    phoneNumber: '',
    issueDescription: '',
    screenshot: '',
    priorityLevel: '',
    agreementForm: '',
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission here (e.g., API call)
    console.log('Form submitted:', formData)
  }

  return (
    <PageLayout>
      <Section>
        <Title first="Sup" second="port" height="h-16" />
        <p className="my-5 body">
          Please fill out the form below to report any technical issues you are experiencing with
          our website. Our technical support team will get back to you as soon as possible.
        </p>

        <form onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
            <FormInput
              label="Name"
              name="name"
              value={formData.name}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Description of the issue"
              name="issueDescription"
              value={formData.issueDescription}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Screenshot"
              name="screenshot"
              value={formData.screenshot}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Priority level"
              name="priorityLevel"
              value={formData.priorityLevel}
              onChangeHandler={() => onChangeHandler}
            />
            <FormInput
              label="Download agreement form"
              name="agreementForm"
              value={formData.agreementForm}
              onChangeHandler={() => onChangeHandler}
            />
          </div>

          <p className="mt-5 body">
            By submitting this form, you agree to our Privacy Policy and consent to the processing
            of your personal data for the purpose of addressing your technical issue.
          </p>

          <PageBtn text="submit" />
        </form>
      </Section>
    </PageLayout>
  )
}

export default Support

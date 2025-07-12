'use client'

import { useState, FormEvent } from 'react'
import { PageBtn } from '../../components/buttons'
import { PageLayout } from '../../components/layout'
import { Section } from '../../components/section'
import { FormInput, Title } from '../../components/ui'
import { whyUs, waysToPartner } from '../../data/data'
import { formValidation } from '../../utils/helper/formValidator'
import { toast } from 'react-toastify'

const Partner: React.FC = () => {
  const [Name, setName] = useState<string>('')
  const [Email] = useState<string>('')
  const [Phone] = useState<string>('')
  const [Location] = useState<string>('')
  const [Staff_Strength, setStaff_Strength] = useState<string>('')
  const [Partnership, setPartnership] = useState<string>('')

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()

    const isValid = formValidation({
      Name,
      Email,
      Phone,
      Location,
      Staff_Strength,
      Partnership,
    })

    if (isValid) {
      const url =
        'https://script.google.com/macros/s/AKfycbzuhRAGUyvlpIcH0BKqiDYLrBtYlf-E3QI9rrKuTm6LJqb5EAiEXzLJM0ux3LgdiM_tfA/exec'

      const form = document.forms.namedItem('partners') as HTMLFormElement

      try {
        await fetch(url, { method: 'POST', body: new FormData(form) })
        toast.success('Submitted successfully!')
      } catch (error) {
        toast.error('Something went wrong.')
        console.error(error)
      }
    }
  }

  return (
    <PageLayout>
      <Section>
        <Title first="part" second="ner with us" height="h-16" />
        <p className="mt-5 body">
          Are you interested in becoming a reseller of our church management application? Partner
          with us to expand your business and provide valuable services to churches and religious
          organizations.
        </p>

        <ul className="list list-disc list-inside body">
          <span>Why Partner With Us?</span>
          {whyUs.map((why, index) => (
            <li key={index}>{why}</li>
          ))}
        </ul>

        {/* Partner Types */}
        <div className="my-5">
          <p className="mb-5 body">Two ways to partner with us.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-5">
            {waysToPartner.map((item, index) => (
              <div key={index} className="glass py-10 px-7 rounded-2xl text-center">
                <h3 className="uppercase font-poppins font-bold">{item.title}</h3>
                <p className="leading-6 my-6 body text-center">{item.desc}</p>
                <button className="uppercase text-[8px] glass py-3 px-8 rounded-full">
                  Explore partnership
                </button>
              </div>
            ))}
          </div>

          <p className="mt-7 mb-2 body">
            <span className="block">How to Partner:</span>
            <span>
              To partner with us as a reseller, please fill out the form below or contact us at
              [email address/phone number]. We look forward to partnering with you and helping you
              grow your business.
            </span>
          </p>
        </div>

        {/* Form */}
        <form name="partners" onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-x-8 gap-y-5 md:gap-y-9">
            <FormInput
              label="Name"
              id="name"
              value={Name}
              name="Name"
              onChangeHandler={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Email"
              id="email"
              value={Email}
              name="Email"
              type="email"
              onChangeHandler={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Phone Number"
              id="phone"
              value={Phone}
              name="Phone"
              type="tel"
              onChangeHandler={(e) => setName(e.target.value)}
            />
            <FormInput
              label="Location"
              id="location"
              value={Location}
              name="Location"
              onChangeHandler={(e) => setName(e.target.value)}
            />
            <FormInput
              label="No of Staff Strength"
              id="staff_strength"
              value={Staff_Strength}
              name="Staff_Strength"
              type="number"
              onChangeHandler={(e) => setStaff_Strength(e.target.value)}
            />

            <div className="glass rounded-lg mt-3">
              <select
                onChange={(e) => setPartnership(e.target.value)}
                value={Partnership}
                name="Partnership"
                className="bg-transparent text-white py-3 px-5 outline-none border-none w-full"
              >
                <option value="" disabled className="bg-transparent text-black">
                  Select Partnership
                </option>
                <option value="Technology Partnership" className="bg-transparent text-black">
                  Technology Partnership
                </option>
                <option value="Reselling Partnership" className="bg-transparent text-black">
                  Reselling Partnership
                </option>
              </select>
            </div>

            <div className="flex gap-3 flex-col">
              <span className="text-[12px]">Download agreement form</span>
              <div className="bg-transparent glass rounded-lg text-white py-3 px-5">Download</div>
            </div>
          </div>

          <PageBtn text="submit" onClick={onSubmitHandler} />
        </form>
      </Section>
    </PageLayout>
  )
}

export default Partner

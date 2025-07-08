'use client'

import Link from 'next/link'
import { PageLayout } from '../../components/layout'
import { Title } from '../../components/ui'
import { Section } from '../../components/section'

const data = [
  {
    text: 'I want to block and delete my account',
    btn: 'delete account',
    link: '/delete-account',
  },
  {
    text: 'I want to log a failed transaction',
    btn: 'log complain',
    link: '/log-complain',
  },
  {
    text: 'I want to review my existing complaints',
    btn: 'review',
    link: '/review',
  },
]

const EnquiryHub = () => {
  return (
    <PageLayout>
      <Section>
        <div className="h-[100vh]">
          <Title first={`Enqu`} second={`iry Hub`} height={`h-16`} />

          <section className="grid grid-cols-3 gap-7 mt-14">
            {data.map((each, index) => {
              return (
                <div
                  key={index}
                  className="glass rounded-2xl py-10 flex items-center justify-center flex-col"
                >
                  <p className="w-[60%] text-[15px] text-center">{each.text}</p>
                  <Link
                    href={each.link}
                    className="glass mt-5 rounded-full py-[10px] px-7 text-[11px] font-light uppercase inline-block text-center"
                  >
                    {each.btn}
                  </Link>
                </div>
              )
            })}
          </section>
        </div>
      </Section>
    </PageLayout>
  )
}

export default EnquiryHub

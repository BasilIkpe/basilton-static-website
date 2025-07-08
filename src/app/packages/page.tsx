'use client'

import Image from 'next/image'
import { PageLayout } from '../../components/layout'
import { Title } from '../../components/ui'
import { Section } from '../../components/section'
import { PageBtn } from '../../components/buttons'
import { comingSoon, packages, apiIntegration } from '../../data/data'

interface InfoProps {
  item: string
  text?: string
}

const Info: React.FC<InfoProps> = ({ item, text }) => {
  return (
    <div className="flex items-center gap-3 glass p-3 rounded-xl">
      <Image src="/assets/svg/check.svg" alt="check" width={12} height={12} />
      <span className={`${text ? `${text} text-[10px]` : 'text-[11px]'}`}>{item}</span>
    </div>
  )
}

const width = `w-[75%]`

const Packages: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title first="Pack" second="ages & pricing" height="h-16" />
        <p className="font-normal text-[12px] tracking-widest mb-16 mt-5">
          We&apos;re passionate about innovation and committed to your success. Experience
          reliability and excellence with our tailored Packages and pricing.
        </p>

        {/* Packages */}
        <div className={`rounded-3xl ${width} h-[60%] glass pb-5 font-poppins mx-auto flex mb-5`}>
          <div className="mx-auto flex justify-center gap-5">
            {packages.map((each, index) => (
              <div
                key={index}
                className={`px-5 py-5 w-[45%] -mt-10 ${
                  each.hide ? '' : 'bg-custard-yellow'
                } inline-block rounded-2xl relative`}
              >
                {!each.hide && (
                  <div className="text-[8px] glass py-1 rounded-full text-center absolute w-[60%] right-3">
                    most popular
                  </div>
                )}

                <h4 className="font-poppins mt-10">
                  <span className="font-bold text-2xl">$0</span>
                  <span className="font-semibold text-[10px]">/month</span>
                </h4>
                <h4 className="text-[25px]">{each.header}</h4>
                <p className="text-[13px] mb-3">{each.desc}</p>
                <ul className="mb-4">
                  {each.wyg.map((item: string, i: number) => (
                    <li key={i} className="mb-1 flex gap-1 font-semibold items-center">
                      <Image
                        src={each.hide ? '/assets/svg/check.svg' : '/assets/svg/whiteCheck.svg'}
                        alt="checkmark"
                        width={12}
                        height={12}
                      />
                      <span className="text-[11px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="glass uppercase rounded-full text-[9px] py-2 w-full font-body">
                  choose option
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className={`rounded-3xl ${width} h-[60%] glass py-6 font-poppins mx-auto mb-12`}>
          <h4 className="text-center text-xl mb-5">Coming Soon</h4>
          <div className="w-[90%] grid grid-cols-2 gap-5 justify-between mx-auto">
            {comingSoon.map((item: string, index: number) => (
              <Info item={item} key={index} />
            ))}
          </div>
        </div>

        {/* API Integration */}
        <div className="my-5 mb-8">
          <h2 className="text-[30px] uppercase mb-1">open api integration</h2>
          <p className="font-helvetica text-[12px] tracking-widest font-normal">
            Elevate your application with our open api
          </p>
        </div>

        <div className={`${width} mx-auto grid grid-cols-3 gap-5`}>
          {apiIntegration.map((item: string, index: number) => (
            <Info key={index} item={item} text="uppercase" />
          ))}
        </div>

        <PageBtn width={width} text="contact us" />
      </Section>
    </PageLayout>
  )
}

export default Packages

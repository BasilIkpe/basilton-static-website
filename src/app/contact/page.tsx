'use client'

import Image from 'next/image'
import { PageLayout } from '@/components/layout'
import { Section } from '@/components/section'
import { Title } from '@/components/ui'
import { Socials } from '@/components/navigation'

interface IconBoxProps {
  children: React.ReactNode
}

const IconBox: React.FC<IconBoxProps> = ({ children }) => {
  return <div className="rounded-xl grid place-items-center px-5 py-5 ">{children}</div>
}

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title first="Con" second="tact" height="h-16" />
        <p className="my-5 body">How to reach us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-4j md:gap-y-2 mb-5 body">
          <div className="flex flex-col gap-0  md:gap-5">
            <div className="flex items-center gap-4 ">
              <IconBox>
                <Image src="/assets/svg/call.svg" alt="Phone Icon" width={20} height={20} />
              </IconBox>
              <p className="text-sm font-bold">+234 806 040 4467</p>
              <Image src="/assets/svg/copy.svg" alt="Copy Icon" width={16} height={16} />
            </div>

            <div className="flex items-center gap-4">
              <IconBox>
                <Image src="/assets/svg/email.svg" alt="Email Icon" width={20} height={20} />
              </IconBox>
              <p className="text-sm font-bold">info@basilton.com</p>
              <Image src="/assets/svg/copy.svg" alt="Copy Icon" width={16} height={16} />
            </div>
          </div>

          <div className="glass py-10 px-8 rounded-lg">
            <p className="flex gap-2 text-sm mb-1">
              <svg
                width="14"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.25 9.5C4.25 8.24022 4.75045 7.03204 5.64124 6.14124C6.53204 5.25045 7.74022 4.75 9 4.75C10.2598 4.75 11.468 5.25045 12.3588 6.14124C13.2496 7.03204 13.75 8.24022 13.75 9.5C13.75 10.7598 13.2496 11.968 12.3588 12.8588C11.468 13.7496 10.2598 14.25 9 14.25C7.74022 14.25 6.53204 13.7496 5.64124 12.8588C4.75045 11.968 4.25 10.7598 4.25 9.5ZM9 6.25C8.13805 6.25 7.3114 6.59241 6.7019 7.2019C6.09241 7.8114 5.75 8.63805 5.75 9.5C5.75 10.362 6.09241 11.1886 6.7019 11.7981C7.3114 12.4076 8.13805 12.75 9 12.75C9.86195 12.75 10.6886 12.4076 11.2981 11.7981C11.9076 11.1886 12.25 10.362 12.25 9.5C12.25 8.63805 11.9076 7.8114 11.2981 7.2019C10.6886 6.59241 9.86195 6.25 9 6.25Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.524376 8.357C0.695303 6.2838 1.6396 4.35069 3.16979 2.94147C4.69998 1.53226 6.70415 0.749994 8.78438 0.75H9.21638C11.2966 0.749994 13.3008 1.53226 14.831 2.94147C16.3612 4.35069 17.3054 6.2838 17.4764 8.357C17.6666 10.6663 16.9532 12.9593 15.4864 14.753L10.6934 20.614C10.4883 20.8648 10.23 21.067 9.93717 21.2057C9.64438 21.3445 9.3244 21.4165 9.00038 21.4165C8.67635 21.4165 8.35638 21.3445 8.06358 21.2057C7.77079 21.067 7.5125 20.8648 7.30738 20.614L2.51438 14.753C1.04749 12.9593 0.334062 10.6663 0.524376 8.357ZM8.78438 2.25C7.08086 2.25026 5.43971 2.89103 4.1867 4.04512C2.93368 5.19921 2.16041 6.78225 2.02038 8.48C1.86198 10.4019 2.45566 12.3102 3.67638 13.803L8.46938 19.665C8.53381 19.7439 8.61497 19.8074 8.70697 19.851C8.79898 19.8947 8.89954 19.9173 9.00138 19.9173C9.10321 19.9173 9.20377 19.8947 9.29578 19.851C9.38779 19.8074 9.46894 19.7439 9.53338 19.665L14.3264 13.803C15.5464 12.3099 16.1393 10.4016 15.9804 8.48C15.8403 6.78208 15.0669 5.1989 13.8137 4.04478C12.5605 2.89066 10.9191 2.25001 9.21538 2.25H8.78438Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
              <span>Addresses</span>
            </p>
            <ul className="list-disc list-inside text-[12px] leading-8 font-poppins font-medium tracking-wider">
              <li>Suit & Lunar Plaza, Plot C47, 521 Road, Gwarinpa II, Abuja</li>
              <li>Lekki, Lagos</li>
              <li>13 Daniel Makinde, Ikosi</li>
            </ul>
          </div>
        </div>

        <Socials className="glass flex w-[35%] items-center gap-10 py-5 px-5 rounded-lg" />
      </Section>
    </PageLayout>
  )
}

export default Contact

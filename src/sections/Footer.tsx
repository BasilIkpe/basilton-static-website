'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../components/section'
import { CallToAction } from '../components/ui'
import { more, pages, others } from '../data/data'
import { Socials } from '../components/navigation'
import { Button } from '../components/buttons'

// If addressIcon is a static image in /public/assets/svg/
const addressIcon = '/assets/svg/addressIcon.svg'

interface FooterProps {
  noSnap?: boolean
}

const Footer: FC<FooterProps> = ({ noSnap = false }) => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`py-1 w-full bg-black relative ${noSnap ? '' : 'footer'}`} id="5">
      <Button
        onClickHandler={onClickHandler}
        text="back to the top"
        custom="py-4 text-sm px-6 absolute right-12 bottom-10 "
        arrow="-rotate-90 h-2 animation-bounce"
      />
      <Socials
        h={20}
        w={20}
        height="h-4"
        className="hidden md:flex items-center gap-3 md:absolute bottom-8 rounded-lg py-3 px-4 left-1/2 transform -translate-x-1/2"
      />
      <Section>
        <div className="flex flex-col md:flex-row  md:gap-10 justify-between">
          <section className="font-helvetica">
            <h3 className="text-2xl md:text-3xl font-helvetica uppercase mb-5">
              we would love
              <br /> to hear from you ‣
            </h3>

            <div className="flex items-center gap-2 mb-4 text-[#FFFFFFCC]">
              <Image src={addressIcon} alt="Address Icon" width={12} height={12} />
              <span className="text-[11px]">ADDRESS</span>
            </div>

            <div className="text-[12px] gap-1 text-[#FFFFFFCC] flex flex-col">
              <span>Suit & Lunar Plaza, Plot C47, 521 Road, Gwarinpa II, Abuja</span>
              <span>Lekki, Lagos</span>
              <span>13 Daniel Makinde, Ikosi</span>
            </div>
          </section>

          <section className="flex items-end flex-col">
            <CallToAction className="flex-row w-full mx-auto" />
            <div className="flex w-full gap-10  md:gap-14 font-normal text-[#FFFFFFCC] text-[12px] mt-8">
              <div className="flex flex-col gap-3">
                {more.map((each, index) => (
                  <Link key={index} href={each.link}>
                    <span className="cursor-pointer capitalize">{each.name}</span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {pages.map((each, index) => (
                  <Link key={index} href={each.link}>
                    <span className="cursor-pointer capitalize">{each.name}</span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {others.map((each, index) => (
                  <Link key={index} href={each.link}>
                    <span className="cursor-pointer capitalize">{each.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Section>
    </footer>
  )
}

export default Footer

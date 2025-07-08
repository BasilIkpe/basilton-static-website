'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Box, CallToAction, FullScreen, SectionContainer } from '../components/ui'

const HeroSection: FC = () => {
  return (
    <FullScreen
      showVideo={true}
      video="/assets/videos/home.mp4"
      overlay={true}
      className="mt-12"
      id={1}
    >
      <SectionContainer number={1} indicator={true}>
        <div className="w-full h-full flex justify-center absolute top-[30%] md:top-[40%] uppercase font-avenir">
          <div className="flex flex-col w-[70%] items-center text-center">
            <div className="relative mb-5 md:mb-0">
              <div className="absolute top-12 robot left-10 animate-pulse h-10 w-10">
                <Image
                  src="/assets/images/others/aiImg.png"
                  alt="AI Left"
                  priority
                  fill
                  objectFit="contain"
                />
              </div>

              <div className="absolute robotLeft top-12 right-10 animate-pulse h-10 w-10">
                <Image
                  src="/assets/images/others/aiImg.png"
                  alt="AI Right"
                  priority
                  fill
                  objectFit="contain"
                />
              </div>

              <Box size="w-[70%] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <h2 className="leading-[] md:leading-[3.5rem] text-3xl md:text-5xl mt-[-25px] z-30 relative">
                the in-depth
                <span className="rounded-lg -mt-1 relative">
                  <Image
                    src="/assets/images/others/ai.png"
                    alt="AI Icon"
                    className="inline-block h-12 -mt-2"
                    width={48}
                    height={48}
                    style={{ verticalAlign: 'middle' }}
                  />
                </span>{' '}
                church solutions-still waters
              </h2>
              <p className="mt-3 tracking-[10px] text-[10px] md:text-lg">
                Divine simplicity in every details
              </p>
            </div>

            <CallToAction />
          </div>
        </div>
      </SectionContainer>
    </FullScreen>
  )
}

export default HeroSection

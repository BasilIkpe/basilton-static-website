'use client'

import { useState } from 'react'
import Image from 'next/image'

import {
  CallToAction,
  FullScreen,
  SectionContainer,
  Title,
  TestimonialCard,
} from '../components/ui'
import { SlideBtn } from '../components/buttons'
import { changeSlideHandler } from '../utils/helper/slideEffect'
import { testimonial } from '../data/data'

interface ImageNumber {
  first: number
  second: number
}

const TestimonialSection: React.FC = () => {
  const [imageNumber, setImageNumber] = useState<ImageNumber>({ first: 0, second: 1 })
  const { first } = imageNumber

  const handleImageChange = (dir: 'back' | 'fwd') => {
    changeSlideHandler(dir, setImageNumber, testimonial)
  }

  return (
    <FullScreen id={4} showVideo={true} overlay={true} video="/assets/videos/vr.mp4">
      <SectionContainer indicator={true} number={4}>
        <section>
          <div className="w-[80%] mx-auto mt-6 flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:flex-row  items-start">
              <div className="flex flex-col md:flex-row items-center mb-10 md:mb-0 mr-3">
                <div className="mr-10">
                  <Title first="happy" second="client" sub="testimonial" height="h-24" />
                  <CallToAction className="flex-row" />
                </div>
                <div className="hidden md:block w-[3px] h-[55vh] bg-custard-yellow" />
              </div>

              <TestimonialCard
                image={testimonial[first].image}
                text={testimonial[first].text}
                name={testimonial[first].name}
              />
            </div>

            <div className="hidden md:block w-[3px] mr-16 h-[80vh] bg-custard-yellow" />

            {/* Use Next.js Image component here */}
            <div className="hidden md:block">
              <Image
                src="/assets/images/testimonial/element.png"
                alt="design element"
                width={7} // approximate width based on aspect ratio
                height={120}
                className="-mt-40 mr-28"
                priority
              />
            </div>

            <div className="hidden md:block w-[3px] h-[45vh] bg-custard-yellow" />
          </div>

          <div className="absolute bottom-1 pb-3 right-1/3">
            <SlideBtn func={handleImageChange} />
          </div>
        </section>
      </SectionContainer>
    </FullScreen>
  )
}

export default TestimonialSection

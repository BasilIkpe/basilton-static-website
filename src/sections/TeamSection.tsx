'use client'

import { FullScreen, SectionContainer, Title } from '../components/ui'
import { team, otherServices } from '../data/data'
import { useState } from 'react'
import { changeSlideHandler } from '../utils/helper/slideEffect'
import SlideBtn from '../components/buttons/SlideBtn'
import Image from 'next/image'

interface ImageNumber {
  first: number
  second: number
}

const TeamSection: React.FC = () => {
  const [imageNumber, setImageNumber] = useState<ImageNumber>({ first: 0, second: 1 })
  const { first, second } = imageNumber

  const handleImageChange = (dir: 'back' | 'fwd'): void => {
    changeSlideHandler(dir, setImageNumber, team)
  }

  return (
    <FullScreen id={3}>
      <SectionContainer indicator={true} number={3}>
        <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-0 md:w-[75%] mx-auto mt-0 md:mt-5">
          <div>
            <Title height="h-16 md:h-28" sub="Some of our" first="other" second="services" />
            <p className="bodyText mt-7 md:mt-5 w-full md:w-[90%] text-justify">
              {otherServices[first].desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full md:w-[62vh] mt-5 md:mt-0">
              <div
                className="rounded-xl h-[25vh] md:h-[73vh] z-10 overflow-hidden relative flex justify-center items-center shadow-xl mb-5"
                style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                }}
              >
                <Image
                  src={otherServices[first].img}
                  alt={`${otherServices[first].name} image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority
                />

                <div className="glass w-[70%] md:w-[90%] h-[7vh] md:h-[10vh] rounded-xl absolute bottom-10 flex flex-col items-center justify-center uppercase">
                  <p className="text-sm md:text-md text-center">{otherServices[first].name}</p>
                  {/* <p>{otherServices[first].designation}</p> */}
                </div>
              </div>
              <SlideBtn func={handleImageChange} />
            </div>
            {/* 
            <div className="w-[45vh] h-[45vh] rounded-2xl absolute -right-[45vh] border border-gray-900 overflow-hidden -translate-y-1/2 top-1/2">
              <Image
                src={otherServices[second].img}
                alt={`${otherServices[second].name} image`}
                layout="fill"
                objectFit="cover"
                className="blur rounded-2xl"
                priority
              />
            </div> */}
          </div>
        </div>
      </SectionContainer>
    </FullScreen>
  )
}

export default TeamSection

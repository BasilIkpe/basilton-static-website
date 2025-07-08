'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const AboutSlider: FC = () => {
  return (
    <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 3000 }} slidesPerView={1}>
      <SwiperSlide>
        <div className="relative h-[40vh] md:h-[55vh] w-full rounded-xl overflow-hidden">
          <Image
            src="/assets/images/aboutImages/one.png"
            alt="Slide 1"
            priority
            fill
            objectFit="cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[40vh] md:h-[55vh] w-full rounded-xl overflow-hidden">
          <Image
            src="/assets/images/aboutImages/two.png"
            alt="Slide 2"
            priority
            fill
            objectFit="cover"
          />
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="relative  h-[40vh] md:h-[55vh] w-full rounded-xl overflow-hidden">
          <Image
            src="/assets/images/aboutImages/three.png"
            alt="Slide 3"
            objectFit="cover"
            priority
            fill
          />
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="relative  h-[40vh] md:h-[55vh] w-full rounded-xl overflow-hidden">
          <Image
            src="/assets/images/aboutImages/four.jpg"
            alt="Slide 3"
            objectFit="cover"
            priority
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative  h-[40vh] md:h-[55vh] w-full rounded-xl overflow-hidden">
          <Image
            src="/assets/images/aboutImages/five.jpg"
            alt="Slide 3"
            objectFit="cover"
            priority
            fill
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default AboutSlider

import Image from 'next/image'
import React from 'react'

interface SlideBtnProps {
  func: (direction: 'back' | 'fwd') => void
}

const SlideBtn: React.FC<SlideBtnProps> = ({ func }) => {
  return (
    <div className="flex gap-3 items-center justify-center mt-3">
      <div className="h-[8vh] cursor-pointer">
        <Image
          className="hover:scale-[1.1] transition-transform duration-300"
          src="/assets/svg/leftArrow.svg"
          alt="Left Arrow"
          width={55}
          height={64}
          onClick={() => func('back')}
          priority
        />
      </div>
      <div className="h-[8vh] cursor-pointer">
        <Image
          className="hover:scale-[1.1] transition-transform duration-300"
          src="/assets/svg/rightArrow.svg"
          alt="Right Arrow"
          width={55}
          height={64}
          onClick={() => func('fwd')}
          priority
        />
      </div>
    </div>
  )
}

export default SlideBtn

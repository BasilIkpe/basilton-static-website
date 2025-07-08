'use client'

import Image from 'next/image'
import { useCallback } from 'react'

interface ScrollArrowProps {
  number: number
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ number }) => {
  const arrows = [
    { src: '/assets/svg/up.svg', alt: 'Up arrow', className: 'arrowUp', target: number - 1 },
    { src: '/assets/svg/down.svg', alt: 'Down arrow', className: 'downArrow', target: number + 1 },
  ]

  const handleScroll = useCallback((id: number) => {
    const element = document.getElementById(id.toString())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="flex absolute right-[4.5%] bottom-6 w-[3rem]">
      {arrows.map(({ src, alt, className, target }, index) => (
        <div key={index} onClick={() => handleScroll(target)} className="cursor-pointer">
          <Image src={src} alt={alt} className={`${className} h-16`} width={64} height={64} />
        </div>
      ))}
    </div>
  )
}

export default ScrollArrow

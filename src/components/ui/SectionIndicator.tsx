import React from 'react'
import { indicatorData } from '../../data/navData'

interface SectionIndicatorProps {
  number: number
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ number }) => {
  return (
    <div className="flex absolute top-1/2 flex-col gap-1 transform -translate-y-16">
      {indicatorData.map((_, index) => (
        <div
          key={index}
          className={`h-[25px] w-[0.15rem] rounded-full ${
            number >= index + 1 ? 'bg-custard-yellow' : 'bg-white'
          }`}
        />
      ))}
    </div>
  )
}

export default SectionIndicator

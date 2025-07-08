'use client'

import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../buttons'

interface CallToActionProps {
  margin?: string
  className?: string
}

const CallToAction: FC<CallToActionProps> = ({ margin, className }) => {
  return (
    <div
      className={`flex ${
        className ? className : 'items-center flex-col'
      }  md:flex-row gap-5 md:gap-10 ${margin ?? 'mt-6'}`}
    >
      <Button text="get started" custom="pr-8 pl-10" />

      <div className="flex items-center gap-1">
        <span className="underline font-body font-normal cursor-pointer text-[11px]">
          Call an Agent
        </span>
        <Image src="/assets/svg/phone.svg" alt="Phone icon" width={16} height={16} />
      </div>
    </div>
  )
}

export default CallToAction

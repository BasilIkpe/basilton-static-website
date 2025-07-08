'use client'

import { ReactNode, FC } from 'react'
import { NavTopBtn } from '../buttons'
import ScrollArrow from '../navigation/ScrollArrow'
import SectionIndicator from './SectionIndicator'

interface SectionContainerProps {
  children: ReactNode
  indicator?: boolean
  number?: number
  topArrow?: boolean
}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  indicator = false,
  number,
  topArrow = false,
}) => {
  return (
    <div className="w-[90%]  md:w-[90%] flex-1 mx-auto relative py-2">
      {children}
      {indicator && number !== undefined && <SectionIndicator number={number} />}
      {indicator && number !== undefined && <ScrollArrow number={number} />}
      {topArrow && <NavTopBtn />}
    </div>
  )
}

export default SectionContainer

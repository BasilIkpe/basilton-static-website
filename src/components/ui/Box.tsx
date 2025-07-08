'use client'

import { FC } from 'react'

interface BoxProps {
  size?: string
  animation?: string
}

const Box: FC<BoxProps> = ({ size = '', animation }) => {
  return <div className={`${size} h-15 md:h-20 absolute bg-custard-yellow ${animation ?? ''}`} />
}

export default Box

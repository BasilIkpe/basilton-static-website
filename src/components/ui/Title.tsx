'use client'

import { FC } from 'react'

interface TitleProps {
  first: string
  second: string
  sub?: string
  width?: string
  height?: string
}

const Title: FC<TitleProps> = ({ first, second, sub, width = '', height = '' }) => {
  console.log(height)

  return (
    <div className={`uppercase flex whitespace-nowrap ${height}`}>
      <h2 className="header font-helvetica leading-10 flex">
        <div
          className={`bg-custard-yellow px-[2px] ${width} flex flex-col items-center justify-end mr-[3px]`}
        >
          <div>
            <span className="text-[7.5px] font-body border-red-500">{sub}</span>
            <span className="font-helvetica block -mt-5">{first}</span>
          </div>
        </div>
        <span className="self-end">{second} ‣</span>
      </h2>
    </div>
  )
}

export default Title

'use client'

import Image from 'next/image'
import { FC } from 'react'

interface ButtonProps {
  custom?: string
  text: string
  arrow?: string
  redirect?: boolean
  onClickHandler?: () => void
}

const Button: FC<ButtonProps> = ({ custom, text, arrow, onClickHandler, redirect }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`border-white border-[1.1px] outline-none rounded-full ${
        custom ?? 'pr-5 pl-7'
      } py-2 font-normal group hover:scale-[1.02] transition-transform duration-100`}
    >
      <div className="flex gap-2 items-center">
        <span className="text-[10px] text-white uppercase font-body font-light">
          {redirect ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/file/H9qVizC8JvoBNGbJwwvMrH/Visitor-management-system?type=design&node-id=601-968&mode=design&t=Sn1PhKsS6Dntf1jn-0"
            >
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </span>
        <Image
          src="/assets/svg/arrow.svg"
          alt="Arrow icon"
          width={8}
          height={8}
          className={`${arrow ?? 'h-1 group-hover:translate-x-1 transition-all duration-100'}`}
        />
      </div>
    </button>
  )
}

export default Button

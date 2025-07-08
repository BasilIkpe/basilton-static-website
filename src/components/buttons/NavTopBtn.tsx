'use client'

import { FC } from 'react'

interface NavTopBtnProps {
  className?: string;
}

const NavTopBtn: FC<NavTopBtnProps> = ({ className = '' }) => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={onClickHandler}
      className={`${className} fixed bottom-10 right-32 animate-bounce cursor-pointer`}
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#3C403C" />
        <path d="M22 29L22 15M22 15L16 21M22 15L28 21" stroke="#ECEEEC" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

export default NavTopBtn

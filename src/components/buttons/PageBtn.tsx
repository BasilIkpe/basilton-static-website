/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface PageBtnProps {
  width?: string
  text: string
  onClick?: any
}

const PageBtn: React.FC<PageBtnProps> = ({ width = 'w-full', text, onClick }) => {
  return (
    <div className={`mt-10 flex justify-end ${width} mx-auto`}>
      <button
        type="submit"
        onClick={onClick}
        className="rounded-full text-[8px] border uppercase py-3 px-20"
      >
        {text}
      </button>
    </div>
  )
}

export default PageBtn

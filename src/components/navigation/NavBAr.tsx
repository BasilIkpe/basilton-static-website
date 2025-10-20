'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { navLinksData } from '../../data/navData'
import { Button } from '../buttons'
import { SectionContainer } from '../ui'
import { Menu, X } from 'lucide-react'

interface NavBarProps {
  glass?: boolean
  fixed?: boolean
}

const NavBar: React.FC<NavBarProps> = ({ glass, fixed }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`w-full z-50 ${glass ? 'glass' : ''} ${fixed ? 'fixed top-0' : ''}`}>
      <SectionContainer>
        <div className="flex items-center justify-between font-helvetica py-2">
          {/* Logo */}
          <div className="relative h-[50px] w-[50px]">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-between w-[89%] uppercase font-bold">
            <ul className="hidden md:flex text-[9px] items-center text-customWhite-lighter">
              {navLinksData.map((link, index) => (
                <li className="mr-10" key={index}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center text-[10px] gap-12">
              <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/assets/svg/globe.svg" alt="language" width={14} height={14} />
                <span className="cursor-pointer font-body">English</span>
              </div>
              <span className="underline font-normal cursor-pointer text-[10px]">Book a demo</span>
              <Button text="sign up" />
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white py-4 px-4 rounded-md">
            <ul className="space-y-4 text-sm uppercase">
              {navLinksData.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/assets/svg/globe.svg" alt="language" width={14} height={14} />
                <span className="font-body">English</span>
              </div>
              <span className="underline cursor-pointer">Book a demo</span>
              <Button text="sign up" />
            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  )
}

export default NavBar

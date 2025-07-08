import Image from 'next/image'
import Link from 'next/link'
import { navLinksData } from '../../data/navData'
import { Button } from '../buttons'
import { SectionContainer } from '../ui'

interface NavBarProps {
  glass?: boolean
  fixed?: boolean
}

const NavBAr: React.FC<NavBarProps> = ({ glass, fixed }) => {
  return (
    <div className={`w-full z-50 ${glass ? 'glass' : ''} ${fixed ? 'fixed top-0' : ''}`}>
      <SectionContainer>
        <div className="flex items-center justify-between font-helvetica py-2">
          <div className="relative h-[25px] w-auto">
            <Image
              src="/assets/images/others/logo.png"
              alt="logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
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

          
        </div>
      </SectionContainer>
    </div>
  )
}

export default NavBAr

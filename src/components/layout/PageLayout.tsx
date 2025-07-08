import React, { ReactNode } from 'react'
import { NavBAr } from '../navigation'
import { SectionContainer } from '../ui'
import { Footer } from '../../sections'

interface PageLayoutProps {
  children: ReactNode
  noNav?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, noNav }) => {
  return (
    <section className="bg-[#041e2d]">
      {!noNav && <NavBAr glass={true} />}
      <SectionContainer>{children}</SectionContainer>
      <Footer noSnap={true} />
    </section>
  )
}

export default PageLayout

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="w-[85%] relative mx-auto py-10 flex flex-col">{children}</section>
}

export default Section

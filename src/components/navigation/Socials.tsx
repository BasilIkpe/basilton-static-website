import Image from 'next/image'

interface SocialsProps {
  className?: string
  height?: string
  w?: number
  h?: number
}

const Socials: React.FC<SocialsProps> = ({ className = '', height = '', w = 40, h = 40 }) => {
  const socials = [
    { href: '', src: '/assets/svg/instagram.svg', alt: 'Instagram' },
    { href: '', src: '/assets/svg/x.svg', alt: 'X' },
    { href: '', src: '/assets/svg/facebook.svg', alt: 'Facebook' },
    { href: '', src: '/assets/svg/youtube.svg', alt: 'YouTube' },
  ]

  return (
    <div className={`${className} grid grid-cols-4 place-items-center align-middle glass`}>
      {socials.map(({ href, src, alt }, index) => (
        <a href={href} key={index} target="_blank" rel="noopener noreferrer">
          <div className={height}>
            <Image src={src} alt={alt} width={w} height={h} priority />
          </div>
        </a>
      ))}
    </div>
  )
}

export default Socials

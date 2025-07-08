'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FullScreenProps {
  children: ReactNode
  animate?: boolean
  overlay?: boolean
  id?: string | number
  className?: string
  showVideo?: boolean
  noSnap?: boolean
  video?: string
}

const FullScreen: React.FC<FullScreenProps> = ({
  children,
  animate = false,
  overlay = false,
  id,
  className = '',
  showVideo = false,
  noSnap = false,
  video = '',
}) => {
  return (
    <motion.div
      id={String(id)}
      className={`w-full section overflow-hidden relative flex flex-col ${
        noSnap ? '' : 'section__scroll'
      } ${className} ${animate ? 'changeBackground backgroundImg' : ''}`}
    >
      {/* Conditional Rendering of Video */}
      {showVideo && video && (
        <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      {overlay && <div className="absolute bg-black inset-0 opacity-90" />}

      {/* Content */}
      {children}
    </motion.div>
  )
}

export default FullScreen

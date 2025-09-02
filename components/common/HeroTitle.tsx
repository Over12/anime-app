'use client'

import { motion } from 'motion/react'

export default function HeroTitle() {
  return (
    <div className='size-full text-center sm:text-start sm:min-w-1/3'>
      <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className='mb-5 text-5xl sm:text-6xl font-bold'>Anime App</motion.h1>
      <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>Don't know what to watch? Let us help you find the perfect anime!</motion.p>
    </div>
  )
}

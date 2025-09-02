'use client'

import { motion } from 'motion/react'

export default function Divisor() {
  return (
    <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: '100%' }} className='absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent' />
  )
}

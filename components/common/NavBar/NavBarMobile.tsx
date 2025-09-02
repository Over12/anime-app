'use client'

import { IconMenuDeep } from '@tabler/icons-react'
import Divisor from '../Divisor'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import NavigationLinks from './NavigationLinks'

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <nav className='flex items-center justify-between sm:hidden fixed bg-background/80 backdrop-blur-xl inset-x-0 spacing-x py-5 z-50'>
        <span className='text-2xl font-bold'>Anime App</span>
        <button className='focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <IconMenuDeep className='size-8' />
        </button>
        <Divisor />
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 flex items-center justify-center bg-background z-40'>
            <NavigationLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}

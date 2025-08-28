'use client'

import { IconMenuDeep, IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'

export default function NavBar() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <>
      <nav className='fixed top-0 w-full h-16 grid grid-cols-2 sm:grid-cols-3 items-center px-7 sm:px-20 z-50'>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='text-2xl font-bold justify-self-start'>Anime App</motion.h1>
        <ul className='hidden sm:flex gap-14 justify-self-center'>
          <Navigation />
        </ul>
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileTap={{ rotate: -360, transitionDuration: '0.5s' }} onClick={toggleTheme} className='hidden sm:block focus:outline-none cursor-pointer justify-self-end'>
          {isDark ? <IconMoon className='text-white size-7' /> : <IconSun className='text-yellow-500 size-7' />}
        </motion.button>
        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }} className='absolute inset-x-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileTap={{ scale: 0.9 }} onClick={toggleMenu} className='sm:hidden focus:outline-none cursor-pointer justify-self-end'>
          <IconMenuDeep className='size-7' />
        </motion.button>
      </nav>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <div className='absolute inset-0 flex items-center justify-center text-center'>
            <ul className='flex flex-col gap-5 text-lg font-semibold uppercase'>
              <Navigation />
            </ul>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

function Navigation() {
  const navigationVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 }
  }

  const links = [
    { href: '/', label: 'Home' },
    { href: '/animes', label: 'Animes' },
    { href: '/upcoming', label: 'Upcoming' }
  ]

  return (
    <>
      {links.map((link, index) => (
        <motion.li key={index} variants={navigationVariant} initial='initial' animate='animate' exit='exit' transition={{ delay: index * 0.1 }}>
          <Link href={link.href}>{link.label}</Link>
        </motion.li>
      ))}
    </>
  )
}

'use client'

import { IconLoader, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function ButtonTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className='justify-self-end animate-spin' disabled>
        <IconLoader className='size-7' />
      </button>
    )
  }

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.button initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }} whileTap={{ rotate: 90 }} className='justify-self-end cursor-pointer focus:outline-none' onClick={handleThemeChange}>
      {theme === 'light' && <IconSun className='size-7' />}
      {theme === 'dark' && <IconMoon className='size-7' />}
    </motion.button>
  )
}

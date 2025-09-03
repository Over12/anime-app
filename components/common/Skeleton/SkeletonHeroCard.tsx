import { motion } from 'motion/react'

export default function SkeletonHeroCard() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute rounded-md animate-pulse bg-gray-500 h-52 w-[325px]' />
  )
}

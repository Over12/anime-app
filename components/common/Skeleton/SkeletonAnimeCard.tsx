import { motion } from 'motion/react'

export default function SkeletonAnimeCard() {
  return (
    <div className='absolute flex-shrink-0 max-w-40 sm:max-w-64 snap-start'>
      <motion.div exit={{ opacity: 0 }} className='w-40 sm:w-64 h-auto aspect-[2/3] bg-gray-500 rounded-md mb-1 shadow-xl animate-pulse' />
    </div>
  )
}

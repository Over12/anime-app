import { motion } from 'motion/react'

export default function SkeletonAnimeRank() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute inset-0 rounded-md bg-gray-500 animate-pulse' />
  )
}

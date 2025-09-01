'use client'

import { Anime } from '@/types/Anime'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import AnimeCard from './AnimeCard'
import { motion, AnimatePresence } from 'motion/react'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

export default function AnimeCarrousel({ animes }: { animes: Anime[] }) {
  const { carrouselRef, atStart, atEnd, scrollLeft, scrollRight } = useHorizontalScroll()

  return (
    <div className='relative'>
      <AnimatePresence>
        {!atStart &&
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={scrollLeft} className='absolute inset-y-0 -left-10 px-1 flex items-center cursor-pointer focus:outline-0'>
            <IconArrowLeft className='size-7' />
          </motion.button>}
      </AnimatePresence>
      <AnimatePresence>
        {!atEnd &&<motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={scrollRight} className='absolute inset-y-0 -right-10 px-1 flex items-center cursor-pointer focus:outline-0'>
            <IconArrowRight className='size-7' />
          </motion.button>}
      </AnimatePresence>
      <div ref={carrouselRef} className='flex gap-5 overflow-x-auto snap-x snap-mandatory'>
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

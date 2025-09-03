'use client'

import { Anime } from '@/types/Anime'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import SkeletonAnimeRank from './Skeleton/SkeletonAnimeRank'
import { motion, AnimatePresence } from 'motion/react'

export default function AnimeRank({ anime }: { anime: Anime }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div key={anime.mal_id} className='flex'>
      <div className={clsx(
        'relative rounded-md w-1/2 h-auto sm:w-64 sm:h-[322px] shadow-md sm:shadow-xl',
        anime.rank === 1 && 'border-2 border-yellow-500 shadow-amber-500/50',
        anime.rank === 2 && 'border-2 border-gray-400 shadow-gray-400/50',
        anime.rank === 3 && 'border-2 border-amber-800 shadow-amber-800/50',
      )}>
        <AnimatePresence>
          {isLoading && <SkeletonAnimeRank />}
        </AnimatePresence>
        <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} ref={(img) => { if (img && img.complete) setIsLoading(false) }} src={anime.images.webp.large_image_url} alt={`Portada de ${anime.title}`} loading='lazy' onLoad={() => setIsLoading(false)} className={`rounded-md aspect-[2/3] transition-opacity ${isLoading ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      <div className='relative w-1/2 sm:w-full px-3'>
        <div className={clsx(
          'flex flex-col sm:flex-row gap-1',
          anime.rank === 1 && 'text-yellow-500',
          anime.rank === 2 && 'text-gray-400',
          anime.rank === 3 && 'text-amber-800'
        )}>
          <span className='text-4xl sm:text-6xl font-bold'>#{anime.rank}</span>
          <div>
            <h3 className='font-semibold text-pretty text-base sm:text-xl'>{anime.title}</h3>
            <p className='hidden sm:block opacity-50 text-lg'>{anime.title_english}</p>
          </div>
        </div>
        <p className='hidden text-pretty sm:block'>{anime.synopsis}</p>
        <div className='absolute flex flex-col text-center text-sm sm:text-base sm:flex-row gap-1 sm:gap-3 bottom-0 right-0 w-full sm:w-fit p-3 pr-0'>
          {anime.trailer.url && <Link href={anime.trailer.url} target='_blank' rel='noopener noreferrer' className='bg-secondary/50 border border-secondary rounded-md px-3 py-2 cursor-pointer'>Watch trailer</Link>}
          <Link href={`/anime/${anime.mal_id}`} className='bg-primary/50 border border-primary rounded-md px-2 sm:px-3 py-1 sm:py-2 cursor-pointer'>Show more</Link>
        </div>
        <div className='absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
      </div>
    </div>
  )
}

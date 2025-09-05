'use client'

import { Anime } from '@/types/Anime'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useState } from 'react'
import SkeletonAnimeCard from './Skeleton/SkeletonAnimeCard'

export default function AnimeCard({ anime } : { anime: Anime }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='relative flex-shrink-0 max-w-40 sm:max-w-64 snap-start group'>
      {isLoading && <SkeletonAnimeCard />}
      <Link href={`/anime/${anime.mal_id}`}>
        <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} ref={(img) => { if (img && img.complete) setIsLoading(false) }} src={anime.images.webp.large_image_url} alt={anime.title} onLoad={() => setIsLoading(false)} loading='lazy' className={`w-40 sm:w-64 h-auto aspect-[2/3] rounded-md mb-1 shadow-xl ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />
        <span className='line-clamp-2 text-pretty font-semibold group-hover:text-primary transition-colors' title={anime.title}>{anime.title}</span>
      </Link>
    </div>
  )
}

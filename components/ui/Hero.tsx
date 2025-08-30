'use client'

import AnimeHeroCard from '../common/AnimeHeroCard'
import Animes from '@/mocks/Animes.json'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className='flex items-center spacing-section min-h-svh overflow-hidden'>
      <div className='min-w-1/3'>
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className='mb-5 text-6xl font-bold'>Anime App</motion.h1>
        <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>Don't know what to watch? Let us help you find the perfect anime!</motion.p>
      </div>
      <div className='grid grid-cols-3 gap-2 translate-x-40 min-w-max'>
        {Animes.data.slice(0, 6).map((anime, index) => (
          <AnimeHeroCard key={anime.mal_id} anime={anime} index={index} />
        ))}
      </div>
    </section>
  )
}

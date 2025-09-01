'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { Anime } from '@/types/Anime'
import { Genre } from '@/types/Genre'
import { IconHash, IconStar } from '@tabler/icons-react'
import { useRef } from 'react'

export default function AnimeHeroCard({ anime, index }: { anime: Anime, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(x, { damping: 20 })
  const rotateY = useSpring(y, { damping: 20 })

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = (event.clientX - left - width / 2) / 25
    const y = (event.clientY - top - height / 2) / 25

    rotateX.set(-y)
    rotateY.set(x)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div className={`perspective-midrange ${index >= 3 ? 'translate-x-14': ''}`}>
      <motion.div ref={cardRef} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} style={{ rotateX, rotateY }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="border border-primary/50 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-md h-52 w-[325px] flex gap-2 p-2 overflow-hidden">
        <img src={anime.images.webp.image_url} alt={'Image of ' + anime.title} loading='lazy' className='rounded-md aspect-[2/3] object-cover' />
        <div className='flex flex-col gap-2'>
          <p className='w-fit bg-green-500/20 border border-green-500 text-green-500 text-xs px-2 py-1 rounded-md'>{anime.status}</p>
          <p className='text-xs'>{anime.episodes} episodes</p>
          <p className='text-sm my-1 font-semibold line-clamp-2'>{anime.title}</p>
          <div className='flex gap-5'>
            <div>
              <span className='flex items-center gap-px'>
                <IconStar className='size-4' />
                {anime.score}
              </span>
              <p className='text-xs text-text/50'>{anime.scored_by} users</p>
            </div>
            <div>
              <span className='flex items-center gap-px'>
                <IconHash className='size-4' />
                {anime.rank}
              </span>
              <p className='text-xs text-text/50'>Ranking</p>
            </div>
          </div>
          <div className='flex text-xs gap-1'>
            {anime.genres.slice(0, 2).map((genre: Genre) => (
              <span key={genre.mal_id} className='border border-primary bg-primary/50 rounded-md p-1'>{genre.name}</span>
            ))}
            {anime.genres.length > 2 && (
              <span className='border border-primary bg-primary/50 rounded-md p-1'>+{anime.genres.length - 2}</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

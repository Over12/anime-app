'use client'

import { Anime } from '@/types/Anime'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import AnimeCard from './AnimeCard'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

export default function AnimeCarrousel({ data }: { data: Anime[] }) {
  const { carrouselRef, atStart, atEnd, scrollLeft, scrollRight } = useHorizontalScroll()

  return (
    <div className='relative'>
      <button onClick={scrollLeft} className={`hidden absolute inset-y-0 -left-10 px-1 sm:flex items-center cursor-pointer focus:outline-0 transition-opacity ${atStart ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <IconArrowLeft className='size-7' />
      </button>
      <button onClick={scrollRight} className={`hidden absolute inset-y-0 -right-10 px-1 sm:flex items-center cursor-pointer focus:outline-0 transition-opacity ${atEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <IconArrowRight className='size-7' />
      </button>
      <div ref={carrouselRef} className='flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory'>
        {data.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

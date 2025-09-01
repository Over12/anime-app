import { Anime } from '@/types/Anime'
import clsx from 'clsx'
import Link from 'next/link'

export default function AnimeRank({ anime }: { anime: Anime }) {
  return (
    <div key={anime.mal_id} className='flex'>
      <img src={anime.images.webp.image_url} alt={`Portada de ${anime.title}`} loading='lazy' className={clsx(
        'rounded-md aspect-[2/3] w-56 h-auto',
        anime.rank === 1 && 'border-2 border-yellow-500 shadow-xl shadow-amber-500/50',
        anime.rank === 2 && 'border-2 border-gray-400 shadow-xl shadow-gray-400/50',
        anime.rank === 3 && 'border-2 border-amber-800 shadow-xl shadow-amber-800/50',
      )} />
      <div className='relative w-full px-3'>
        <div className={clsx(
          'flex gap-1',
          anime.rank === 1 && 'text-yellow-500',
          anime.rank === 2 && 'text-gray-400',
          anime.rank === 3 && 'text-amber-800'
        )}>
          <span className='text-6xl font-bold'>#{anime.rank}</span>
          <div>
            <h3 className='font-semibold text-xl'>{anime.title}</h3>
            <p className='opacity-50 text-lg'>{anime.title_english}</p>
          </div>
        </div>
        <p className='text-pretty'>{anime.synopsis}</p>
        <div className='absolute flex gap-3 bottom-0 right-0 p-3'>
          {anime.trailer.url && <Link href={anime.trailer.url} target='_blank' rel='noopener noreferrer' className='bg-secondary/50 border border-secondary rounded-md px-3 py-2 cursor-pointer'>Watch trailer</Link>}
          <Link href={`/anime/${anime.mal_id}`} className='bg-primary/50 border border-primary rounded-md px-3 py-2 cursor-pointer'>Show more</Link>
        </div>
        <div className='absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
      </div>
    </div>
  )
}

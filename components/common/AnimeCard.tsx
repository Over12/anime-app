import { Anime } from '@/types/Anime'
import Link from 'next/link'

export default function AnimeCard({ anime } : { anime: Anime }) {
  return (
    <div className='flex-shrink-0 max-w-40 sm:max-w-64 snap-start group'>
      <Link href={`/anime/${anime.mal_id}`}>
        <img src={anime.images.webp.large_image_url} alt={anime.title} loading='lazy' className='w-40 sm:w-64 h-auto aspect-[2/3] sm:opacity-90 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 rounded-md mb-1 shadow-xl' />
        <span className='line-clamp-2 text-pretty font-semibold group-hover:text-primary transition-colors' title={anime.title}>{anime.title}</span>
      </Link>
    </div>
  )
}

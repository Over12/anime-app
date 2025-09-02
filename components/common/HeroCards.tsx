import { Anime } from '@/types/Anime'
import AnimeHeroCard from './AnimeHeroCard'

export default function HeroCards({ data }: { data: Anime[] }) {
  return (
    <div className='hidden sm:grid grid-cols-3 gap-2 translate-x-40 min-w-max'>
      {data.map((anime, index) => (
        <AnimeHeroCard key={anime.mal_id} anime={anime} index={index} />
      ))}
    </div>
  )
}

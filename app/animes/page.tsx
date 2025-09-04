import AnimeCard from '@/components/common/AnimeCard'
import { fetchAnimes } from '@/lib/api'
import { AnimeQueryParameters } from '@/types/AnimeQueryParameters'

export default async function page({ searchParams }: { searchParams: Promise<AnimeQueryParameters> }) {
  const params = await searchParams
  const animes = await fetchAnimes(params)

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center-safe gap-3 sm:gap-5'>
      {animes.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  )
}

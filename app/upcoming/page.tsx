import AnimeCard from '@/components/common/AnimeCard'
import Pagination from '@/components/common/Search/Pagination'
import { fetchSeasonUpcoming } from '@/lib/api'
import { deleteDuplicate } from '@/lib/utils'
import { AnimeQueryParameters } from '@/types/AnimeQueryParameters'

export default async function page({ searchParams }: { searchParams: Promise<AnimeQueryParameters> }) {
  const params = await searchParams
  const animes = await fetchSeasonUpcoming(params)
  const uniqueAnimes = deleteDuplicate(animes.data)

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center-safe gap-3 sm:gap-5'>
        {uniqueAnimes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <Pagination paginationData={animes.pagination} />
    </>
  )
}

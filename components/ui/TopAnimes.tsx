import { fetchTopAnime } from '@/lib/api'
import AnimeRank from '../common/AnimeRank'

export default async function TopAnimes() {
  const top = await fetchTopAnime({ page: 1, limit: 5 })

  return (
    <section className='spacing-section'>
      <h2 className='title-section'>The Best 5 Of The Ranking</h2>
      <div className='flex flex-col gap-7'>
        {top.data.map((anime) => (
          <AnimeRank key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  )
}

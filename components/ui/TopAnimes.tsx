import Animes from '@/mocks/Animes.json'
import AnimeRank from '../common/AnimeRank'

export default function TopAnimes() {
  const animes = Animes.data.slice(0, 5)

  return (
    <section className='spacing-section'>
      <h2 className='title-section'>The best 5 of the ranking</h2>
      <div className='flex flex-col gap-7'>
        {animes.map((anime) => (
          <AnimeRank key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  )
}

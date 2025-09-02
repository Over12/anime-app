import { fetchSeasonNow } from '@/lib/api'
import AnimeCarrousel from '../common/AnimeCarrousel'

export default async function SeasonAnimes() {
  const season = await fetchSeasonNow({ page: 1 })

  return (
    <section className='spacing-section'>
      <h2 className='title-section'>What’s New This Season</h2>
      <AnimeCarrousel data={season.data} />
    </section>
  )
}

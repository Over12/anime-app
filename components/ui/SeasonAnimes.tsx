import Animes from '@/mocks/Animes.json'
import AnimeCarrousel from '../common/AnimeCarrousel'

export default function SeasonAnimes() {
  
  const animes = Animes.data

  return (
    <section className='spacing-section'>
      <h2 className='title-section'>What’s New This Season</h2>
      <AnimeCarrousel animes={animes} />
    </section>
  )
}

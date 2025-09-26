import { fetchTopAnime } from '@/lib/api'
import HeroCards from '../common/Hero/HeroCards'
import HeroTitle from '../common/Hero/HeroTitle'
import { Anime } from '@/types/Anime'

export default async function Hero() {
  const animeUpcoming = await fetchTopAnime({ page: 1, limit: 6, filter: 'airing' })

  return (
    <section className='flex items-center spacing-section min-h-svh overflow-hidden'>
      <HeroTitle />
      <HeroCards data={animeUpcoming.data as Anime[]} />
    </section>
  )
}

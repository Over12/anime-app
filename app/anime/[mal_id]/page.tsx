import Pill from '@/components/common/Pill'
import { fetchAnimeById } from '@/lib/api'
import { IconStar, IconStarFilled } from '@tabler/icons-react'

export default async function page({ params }: { params: Promise<{ mal_id: number }> }) {
  const { mal_id } = await params
  const { data } = await fetchAnimeById({ mal_id })

  return (
    <main className='min-h-svh spacing-x pt-24'>
      <div className='flex gap-5 w-full'>
        <div className='flex-shrink-0 max-w-[300px]'>
          <img src={data.images.webp.large_image_url} alt={`Poster of ${data.title}`} className='aspect-[2/3] w-[300px] h-auto rounded-md' />
          <div className='flex flex-wrap mt-2 gap-2'>
            {data.score && <Pill className='bg-red-500/70 border-red-500 font-bold'>Score: {data.score}</Pill>}
            <Pill className='bg-green-500/70 border-green-500 font-bold'>Popularity: #{data.popularity}</Pill>
            {data.rank && <Pill className='bg-yellow-500/70 border-yellow-500 font-bold'>Rank: #{data.rank}</Pill>}
            <Pill className='bg-blue-500/70 border-blue-500 font-bold'>Favorites: {data.favorites}</Pill>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <h1 className='text-4xl font-bold'>{data.title}</h1>
            <p className='text-text/50'>{data.title_english}</p>
          </div>
          <div className='flex gap-2'>
            {data.season && <Pill className='bg-accent/70 border-accent'>{data.season} {data.year}</Pill>}
            {data.genres.map((genre) => (
              <Pill key={genre.mal_id} className='bg-primary/70 border-primary'>{genre.name}</Pill>
            ))}
          </div>
          <p>{data.synopsis}</p>
          <h3 className='text-2xl font-bold mt-2'>Details</h3>
          <div className='flex gap-2'>
            <Pill className='bg-primary/70 border-primary'>Type: {data.type}</Pill>
            <Pill className='bg-primary/70 border-primary'>Episodes: {data.episodes}</Pill>
            <Pill className='bg-primary/70 border-primary'>Status: {data.status}</Pill>
            <Pill className='bg-primary/70 border-primary'>Duration: {data.duration}</Pill>
            <Pill className='bg-primary/70 border-primary'>Rating: {data.rating}</Pill>
          </div>
          {data.trailer && data.trailer.embed_url && (
            <>
              <h3 className='text-2xl font-bold mt-2'>Trailer</h3>
              <iframe src={data.trailer.embed_url} className='w-2/3 aspect-video rounded-md shadow-lg' allow='autoplay; encrypted-media' allowFullScreen></iframe>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

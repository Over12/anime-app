'use client'

import { Anime } from '@/types/Anime'
import Pill from '../Pill'
import { useState } from 'react'

export default function ImageSide({ data }: { data: Anime }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className='flex-shrink-0 w-full sm:max-w-[300px]'>
      <div className='relative'>
        <img src={data.images.webp.large_image_url} alt={`Poster of ${data.title}`} ref={(img) => { if (img && img.complete) setIsImageLoaded(true) }} onLoad={() => setIsImageLoaded(true)} className={`aspect-[2/3] w-full sm:w-[300px] h-auto rounded-md ${isImageLoaded ? '' : 'opacity-0'}`} />
        {!isImageLoaded && <div className='bg-gray-500 animate-pulse absolute inset-0 rounded-md' />}
      </div>
      <div className='flex flex-wrap mt-2 gap-2'>
        {data.score && <Pill className='bg-red-500/70 border-red-500 font-bold'>Score: {data.score}</Pill>}
        <Pill className='bg-green-500/70 border-green-500 font-bold'>Popularity: #{data.popularity}</Pill>
        {data.rank && <Pill className='bg-yellow-500/70 border-yellow-500 font-bold'>Rank: #{data.rank}</Pill>}
        <Pill className='bg-blue-500/70 border-blue-500 font-bold'>Favorites: {data.favorites}</Pill>
      </div>
    </div>
  )
}
